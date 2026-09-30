import tsIcon from './assets/img/techs/typescript.svg?raw'
import reactIcon from './assets/img/techs/react.svg?raw'
import cssIcon from './assets/img/techs/css3.svg?raw'
import htmlIcon from './assets/img/techs/html5.svg?raw'

import type { HeroDefinition } from './hero'
import type { SnippetDefinition } from './project-snippets'
import type { InfoBlock } from './info-section'

interface SectionBase {
    id: string
    navLabel: string
    title: string
}

export type PageSection =
    | SectionBase & { kind: 'snippets'; items: SnippetDefinition[] }
    | SectionBase & { kind: 'info'; blocks: InfoBlock[] }

export const heroData: HeroDefinition = {
    heroTitle: 'TypeScript Front-end Developer',
    heroDescr:
        `Hello, I am Daria, and I am a front-end developer with 8 years of IT background
        in product delivery, design systems, and cross-functional collaboration.
        Experienced translating Figma designs into production-ready React interfaces
        with pixel-perfect fidelity. Strong focus on spacing, typography,
        and usability, with experience in design systems and usability testing.`,
    tech: [
        { label: 'TypeScript', icon: tsIcon },
        { label: 'React', icon: reactIcon },
        { label: 'CSS', icon: cssIcon },
        { label: 'HTML', icon: htmlIcon }
    ],
}

export const sections: PageSection[] = [
    {
        id: 'projects',
        navLabel: 'Projects',
        title: 'Projects',
        kind: 'snippets',
        items: [
            {
                title: 'Book Club',
                url: 'https://bookclub.narangi.design/',
                descr: 'Solo-built full-stack platform: library, voting, stats, Telegram bot. Invite-only.',
                labels: ['React', 'FastAPI', 'PostgreSQL', 'Telegram Bot API'],
                image: '',
            },
            {
                title: 'Hue Glue',
                url: 'https://narangi-design.github.io/hue-glue-game/',
                descr: 'Color puzzle with perceptually even Oklab gradients and keyboard drag-and-drop.',
                labels: ['TypeScript', 'React', 'Vitest', 'Claude Code'],
                image: '',
            },
            {
                title: 'Keyboard Tester',
                url: 'https://narangi-design.github.io/keyboard-tester/',
                descr: 'Web application to test your desktop keyboard. For now only for Windows',
                labels: ['TypeScript', 'React', 'CSS', 'Jest'],
                image: '',
            },
            {
                title: 'Soyka NL',
                url: 'https://www.soyka.nl/',
                descr: 'Website for a non-profit organization advocating for human rights and democracy',
                labels: ['Wix', 'CSS'],
                image: '',
            },
        ],
    },
    {
        id: 'about',
        navLabel: 'About Me',
        title: 'About Me',
        kind: 'info',
        blocks: [
            {
                type: 'text',
                title: 'Availability',
                text:
                    `Based in the Netherlands, eligible to work in NL.
                    Open to visa sponsorship and relocation.
                    Languages: English (B2), Russian (native), Dutch (A2).`,
            },
            {
                type: 'list',
                title: 'Tech Stack',
                items: [
                    'React, TypeScript',
                    'HTML5, CSS3, Tailwind CSS',
                    'ARIA, WCAG 2.2',
                    'SDLC, CI/CD, GitHub Actions',
                ],
            },
            {
                type: 'links',
                title: 'Education',
                items: [
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
                        title: 'Google UX Design Professional Certificate',
                        url: 'https://coursera.org/share/d52311d5be6a2fbaa49ec14a31c42910',
                        description: 'Coursera — User-centered design, accessibility, usability testing',
                    },
                ],
            },
            {
                type: 'list',
                title: 'Currently Developing',
                items: [
                    'Python for back-end development (FastAPI)',
                    'Databases: SQL, PostgreSQL',
                    'Docker and server deployment',
                    'LLM APIs and prompt engineering',
                ],
            },
        ],
    },
]
