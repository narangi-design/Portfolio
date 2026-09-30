export interface LinkItem {
    title: string
    url?: string
    description?: string
}

export type InfoBlock =
    | { type: 'list'; title: string; items: string[] }
    | { type: 'text'; title: string; text: string }
    | { type: 'links'; title: string; items: LinkItem[] }

function createList(items: string[]): HTMLUListElement {
    const ul = document.createElement('ul')

    items.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    })

    return ul
}

function createLinkList(items: LinkItem[]): HTMLUListElement {
    const ul = document.createElement('ul')

    items.forEach(item => {
        const li = document.createElement('li')

        const a = document.createElement('a')
        if (item.url) a.href = item.url
        a.textContent = item.title
        li.appendChild(a)

        if (item.description) {
            const span = document.createElement('span')
            span.textContent = ` — ${item.description}`
            li.appendChild(span)
        }

        ul.appendChild(li)
    })

    return ul
}

function createText(text: string): HTMLParagraphElement {
    const p = document.createElement('p')
    p.textContent = text
    return p
}

function createBlockBody(block: InfoBlock): HTMLElement {
    switch (block.type) {
        case 'list':
            return createList(block.items)
        case 'text':
            return createText(block.text)
        case 'links':
            return createLinkList(block.items)
        default: {
            const unhandled: never = block
            throw new Error(`Unknown info block: ${JSON.stringify(unhandled)}`)
        }
    }
}

function createInfoBlock(block: InfoBlock): HTMLElement {
    const section = document.createElement('section')
    section.className = `info-block info-block--${block.type}`

    const title = document.createElement('h3')
    title.textContent = block.title

    section.appendChild(title)
    section.appendChild(createBlockBody(block))

    return section
}

export default function createInfoSection(
    titleText: string,
    blocks: InfoBlock[]
): HTMLElement {
    const section = document.createElement('section')
    section.className = 'info-section'

    const title = document.createElement('h2')
    title.textContent = titleText

    const grid = document.createElement('div')
    grid.className = 'info-grid'
    blocks.forEach(block => grid.appendChild(createInfoBlock(block)))

    section.appendChild(title)
    section.appendChild(grid)

    return section
}
