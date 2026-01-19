export interface SnippetDefinition {
    title: string
    url: string
    descr: string
    labels: TechLabel[]
    image?: string
}

function createSnippet(snippet: SnippetDefinition): HTMLElement {
    const a = document.createElement('a')
    a.href = snippet.url
    a.className = 'snippet'
    a.target = '_blank'
    a.rel = 'noopener noreferrer'

    a.innerHTML = `
        <!--<img src="${snippet.image}" alt="${snippet.title}" />-->
        <h3>${snippet.title}</h3>
        <p>${snippet.descr}</p>
        <div class="tech-labels">
            ${snippet.labels
                .map(label => `<span class="tech-label">${label}</span>`)
                .join('')}
        </div>
    `

    return a
}

function createSnippetsGrid(snippets: SnippetDefinition[]): HTMLElement {
    const grid = document.createElement('div')
    grid.className = 'snippet-grid'

    snippets.forEach(snippet => {
        grid.appendChild(createSnippet(snippet))
    })

    return grid
}

function createSnippetsSection(
    titleText: string,
    snippets: SnippetDefinition[]
): HTMLElement {
    const section = document.createElement('section')
    section.className = 'snippets-section'

    const title = document.createElement('h2')
    title.textContent = titleText

    section.appendChild(title)
    section.appendChild(createSnippetsGrid(snippets))

    return section
}

export default function insertProjects(
    scrollContainer: HTMLElement,
    titleText: string,
    snippets: SnippetDefinition[],
    wrap: (content: HTMLElement) => HTMLElement
): void {
    const content = createSnippetsSection(titleText, snippets)
    scrollContainer.appendChild(wrap(content))
}