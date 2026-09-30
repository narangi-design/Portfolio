import insertHeader from './header'
import insertHeroSection from './hero'
import createInfoSection from './info-section'
import createSnippetsSection from './project-snippets'
import { heroData, sections, type PageSection } from './content'

function createSectionContent(section: PageSection): HTMLElement {
    switch (section.kind) {
        case 'snippets':
            return createSnippetsSection(section.title, section.items)
        case 'info':
            return createInfoSection(section.title, section.blocks)
        default: {
            const unhandled: never = section
            throw new Error(`Unknown section: ${JSON.stringify(unhandled)}`)
        }
    }
}

function createBottomSection(
    content: HTMLElement,
    id: string
): HTMLElement {
    const section = document.createElement('section')
    section.className = 'section-bottom'
    section.id = id
    section.appendChild(content)
    return section
}

function sectionObserver(): void {
    const root = document.querySelector('.scroll-container')
    const mainNavLinks = document.querySelectorAll<HTMLAnchorElement>('.main-nav_link')
    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                const id = (entry.target as HTMLElement).id
                if (!id) continue
                mainNavLinks.forEach(link =>
                    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`)
                )
            }
        },
        { root, threshold: 0.6 }
    )
    document.querySelectorAll<HTMLElement>('.section-bottom').forEach(s => observer.observe(s))
}


window.addEventListener('DOMContentLoaded', () => {
    insertHeader(sections.map(s => ({ label: s.navLabel, href: `#${s.id}` })))

    const main = document.querySelector('main') as HTMLElement

    insertHeroSection(main, heroData)

    const scrollContainer = document.createElement('div')
    scrollContainer.className = 'scroll-container'
    main.appendChild(scrollContainer)

    sections.forEach(section => {
        scrollContainer.appendChild(
            createBottomSection(createSectionContent(section), section.id)
        )
    })

    sectionObserver()
})
