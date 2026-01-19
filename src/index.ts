import tsIcon from './assets/img/techs/typescript.svg?raw'
import reactIcon from './assets/img/techs/react.svg?raw'
import cssIcon from './assets/img/techs/css3.svg?raw'

import insertHeader from './header'
import insertHeroSection, { type HeroDefinition } from './hero'
import insertAboutMe, { type AboutMeDefinition } from './about-me'
import insertProjects, { type SnippetDefinition } from './project-snippets'

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

const heroData: HeroDefinition = {
    heroTitle: 'TypeScript Front-end Developer',
    heroDescr:
        `Hello, I am Daria, and I am a front-end developer with experience in UX,
        accessibility, and performance optimization. I work independently,
        understand both technical and product requirements and combine
        design thinking and engineering practices to build clear, usable web interfaces.`,
    tech: [
        { label: 'TypeScript', icon: tsIcon },
        { label: 'React', icon: reactIcon },
        { label: 'CSS', icon: cssIcon },
    ],
}

const projectsData: SnippetDefinition[] = [
    {
        title: 'Keyboard Tester',
        url: 'https://narangi-design.github.io/keyboard-tester/',
        descr: 'Web application to test your desktop keyboard. For now only for Windows',
        labels: ['TypeScript', 'React', 'CSS', 'Jest'],
        image: '',
    },
    {
        title: 'Computer Parts Compatibility Checker',
        url: 'https://github.com/narangi-design/comp-parts-compatibility',
        descr: 'Web application is in progress, so check out Github repository',
        labels: ['TypeScript', 'React'],
        image: '',
    },    
    {
        title: 'Medical Excellence League',
        url: 'https://medexleague.com/',
        descr: 'Landing page for a competition platform for doctors',
        labels: ['Tilda', 'CSS'],
        image: '',
    },
    {
        title: 'Soyka NL',
        url: 'https://www.soyka.nl/',
        descr: 'Website for a non-profit organization advocating for human rights and democracy',
        labels: ['Wix', 'CSS'],
        image: '',
    },
]

const aboutMeData: AboutMeDefinition = {
    techStack: [
        'TypeScript, JavaScript (ES6+)',
        'React',
        'HTML, CSS',
        'UX design patterns',
    ],

    growth: [
        'Backend fundamentals',
        'Software design patterns',
    ],

    background:
        'I have worked in UX and web design and previously collaborated closely with development teams as a project manager. This experience helps me manage tasks, communicate clearly, and work without constant supervision.',

    education: [
        {
            title: 'Front-End Engineer',
            url: 'https://www.codecademy.com/profiles/Be_Narangi/certificates/2682884a0719474f96407efe432fdd87',
            description: 'Codecademy — JavaScript, HTML, CSS, React, Git',
        },
        {
            title: 'Intermediate TypeScript',
            url: 'https://www.codecademy.com/profiles/Be_Narangi/certificates/84f728978e434c02a78abaa0baca0d6c',
            description: 'Codecademy — TypeScript'
        },
        {
            title: 'UX Design Specialization',
            url: 'https://www.credly.com/badges/45988297-30b6-4841-b781-b04887cdafc7/linked_in_profile',
            description: 'Google — User-centered design, accessibility, usability testing',
        },
    ],
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
    insertHeader()

    const main = document.querySelector('main') as HTMLElement

    insertHeroSection(main, heroData)

    const scrollContainer = document.createElement('div')
    scrollContainer.className = 'scroll-container'
    main.appendChild(scrollContainer)

    insertProjects(
        scrollContainer,
        'Projects',
        projectsData,
        (content) => createBottomSection(content, 'projects')
    )

    insertAboutMe(
        scrollContainer,
        'About Me',
        aboutMeData,
        (content) => createBottomSection(content, 'about')
    )

    sectionObserver()
})
