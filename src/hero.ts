export interface HeroTech {
    label: string
    icon: string
}

export interface HeroDefinition {
    heroTitle: string
    heroDescr: string
    tech: HeroTech[]
}

function createHeroTechList(tech: HeroTech[]): HTMLElement {
    const list = document.createElement('ul')
    list.className = 'hero-tech'

    tech.forEach(item => {
        const li = document.createElement('li')
        li.className = 'hero-tech_item'

        li.innerHTML = `
            <span class="hero-tech_icon" aria-hidden="true">
                ${item.icon}
            </span>
            <span class="hero-tech_label">
                ${item.label}
            </span>
        `

        list.appendChild(li)
    })

    return list
}

function createHeroSection(data: HeroDefinition): HTMLElement {
    const section = document.createElement('section')
    section.className = 'hero'

    const content = document.createElement('div')
    content.className = 'hero-content'

    const headingText = document.createElement('h1')
    headingText.textContent = data.heroTitle

    const descrText = document.createElement('p')
    descrText.className = 'hero-descr'
    descrText.textContent = data.heroDescr

    content.appendChild(headingText)
    content.appendChild(descrText)
    content.appendChild(createHeroTechList(data.tech))

    section.appendChild(content)

    return section
}

export default function insertHeroSection(
    main: HTMLElement,
    data: HeroDefinition
): void {
    const hero = createHeroSection(data)
    main.appendChild(hero)
}