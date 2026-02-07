import githubIcon from './assets/img/social-links/github.svg?raw'
import linkedinIcon from './assets/img/social-links/linkedin.svg?raw'
import emailIcon from './assets/img/social-links/email.svg?raw'

interface SocialLinkDefinition {
    title: string
    url: string
    icon: string
}

function createSocialLinksNav(): HTMLElement {
    const links: SocialLinkDefinition[] = [
        {
            title: 'GitHub',
            url: 'https://github.com/narangi-design',
            icon: githubIcon,
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/narangi/',
            icon: linkedinIcon,
        },
        {
            title: 'E-mail',
            url: 'mailto: dg.riabova@gmail.com',
            icon: emailIcon
        }
    ]

    const nav = document.createElement('nav')
    nav.className = 'social-links-nav'
    nav.setAttribute('aria-label', 'Social links')

    links.forEach(link => {
        nav.appendChild(createSocialLink(link))
    })

    return nav
}

function createSocialLink(link: SocialLinkDefinition): HTMLElement {
    const a = document.createElement('a')
    a.className = 'social-link'
    a.href = link.url
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.setAttribute('aria-label', link.title)
    a.title = link.title

    a.innerHTML = `
        <span class="social-link_icon" aria-hidden="true">
            ${link.icon}
        </span>
        <span class="social-link_label">
            ${a.title}
        </span>
    `

    return a
}

function createMainNav(): HTMLElement {
    const nav = document.createElement('nav')
    nav.className = 'main-nav'
    nav.setAttribute('aria-label', 'Main navigation')

    const items = [
        { label: 'Projects', href: '#projects' },
        { label: 'Stack', href: '#about' },
    ]

    items.forEach(item => {
        const a = document.createElement('a')
        a.className = 'main-nav_link'
        a.href = item.href
        a.textContent = item.label
        nav.appendChild(a)
    })

    return nav
}

export default function insertHeader(): void {
    const header = document.createElement('header')
    header.className = 'site-header'

    header.appendChild(createSocialLinksNav())
    header.appendChild(createMainNav())

    document.body.insertAdjacentElement('afterbegin', header)
}
