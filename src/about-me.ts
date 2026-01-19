export interface AboutListItem {
    title?: string
    url?: string
    description?: string
}

export interface AboutMeDefinition {
    techStack: string[]
    growth: string[]
    background: string
    education: AboutListItem[]
}

function createList(items: string[]): HTMLUListElement {
    const ul = document.createElement('ul')

    items.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    })

    return ul
}

function createAboutMeSection(
    titleText: string,
    data: AboutMeDefinition
): HTMLElement {
    const section = document.createElement('section')
    section.className = 'about-me'

    const title = document.createElement('h2')
    title.textContent = titleText

    const grid = document.createElement('div')
    grid.className = 'about-grid'

    const stack = document.createElement('section')
    stack.className = 'about-stack'
    stack.innerHTML = `<h3>Tech Stack</h3>`
    stack.appendChild(createList(data.techStack))

    const growth = document.createElement('section')
    growth.className = 'about-growth'
    growth.innerHTML = `<h3>Currently Developing</h3>`
    growth.appendChild(createList(data.growth))

    const background = document.createElement('section')
    background.className = 'about-background'
    background.innerHTML = `
        <h3>Background</h3>
        <p>${data.background}</p>
    `

    const education = document.createElement('section')
    education.className = 'about-education'
    education.innerHTML = `<h3>Education</h3>`

    const eduList = document.createElement('ul')
    data.education.forEach(item => {
        const li = document.createElement('li')

        if (item.title) {
            const a = document.createElement('a')
            if (item.url) a.href = item.url
            a.textContent = item.title
            li.appendChild(a)
        }

        if (item.description) {
            const span = document.createElement('span')
            span.textContent = ` — ${item.description}`
            li.appendChild(span)
        }

        eduList.appendChild(li)
    })
    education.appendChild(eduList)

    section.appendChild(title)

    grid.appendChild(background)
    grid.appendChild(stack)
    grid.appendChild(education)
    grid.appendChild(growth)
    section.appendChild(grid)

    return section
}

export default function insertAboutMe(
    scrollContainer: HTMLElement,
    titleText: string,
    data: AboutMeDefinition,
    wrap: (content: HTMLElement) => HTMLElement
): void {
    const content = createAboutMeSection(titleText, data)
    scrollContainer.appendChild(wrap(content))
}