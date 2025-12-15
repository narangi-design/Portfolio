import { insertHeader } from './header.js'
import { Snippet, createSnippetsGrid } from './project-snippets.js'
import keyboardImage from './assets/og-image.png'

export function insertSnippets(): void {
    const container = document.createElement('section')
    container.className = 'snippets-section'

    const title = document.createElement('h2')
    title.textContent = 'Projects'
    container.appendChild(title)

    const snippets = new Snippet()

    snippets.addSnippet({
        title: 'Keyboard Tester',
        url: 'https://narangi-design.github.io/keyboard-tester/',
        descr: 'The application to test your desktop keyboard.',
        labels: ['TypeScript', 'React', 'CSS', 'Jest'],
        image: keyboardImage
    })

    snippets.addSnippet({
        title: 'Bank Card Form',
        url: '',
        descr: 'Input form with data verificatiuon.',
        labels: ['TypeScript', 'React', 'HTML'],
        image: '/assets/snippets/darkmode.png'
    })

    const grid = createSnippetsGrid(snippets.getAllSnippets())
    container.appendChild(grid)

    const main = document.querySelector('main') as HTMLElement
    main.appendChild(container)
}

window.addEventListener('DOMContentLoaded', () => {
    insertHeader()
    insertSnippets()
})