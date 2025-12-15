interface SnippetDefinition {
    title: string
    url: string
    descr: string
    labels: TechLabel[]
    image?: string
}

export class Snippet {
    private snippets: SnippetDefinition[] = [];

    addSnippet(snippet: SnippetDefinition): void {
        this.snippets.push(snippet)
    }

    getSnippet(index: number): SnippetDefinition | undefined {
        return this.snippets[index]
    }

    getAllSnippets(): SnippetDefinition[] {
        return this.snippets
    }
}

export function createSnippetElement(snippet: SnippetDefinition): HTMLElement {
    const element = document.createElement('a')
    element.href = snippet.url
    element.className = 'snippet'
    element.target = '_blank'
    element.rel = 'noopener noreferrer'
    
    element.innerHTML = `
        <img src="${snippet.image}" alt="${snippet.title}" />
        <h3>${snippet.title}</h3>
        <p>${snippet.descr}</p>
        <div class="tech-labels">
            ${snippet.labels.map(label => `<span class="tech-label">${label}</span>`).join('')}
        </div>
    `
    return element
}

export function createSnippetsGrid(snippets: SnippetDefinition[]): HTMLElement {
    const grid = document.createElement('div')
    grid.className = 'snippet-grid'
    
    snippets.forEach(snippet => {
        grid.appendChild(createSnippetElement(snippet))
    })
    
    return grid
}