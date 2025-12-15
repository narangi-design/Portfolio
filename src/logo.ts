interface LogoDefinition {
    src: string
    alt: string
    href?: string
}

export class Logo {
    private logo: LogoDefinition | null = null;

    setLogo(logo: LogoDefinition): void {
        this.logo = logo
    }

    getLogo(): LogoDefinition | null {
        return this.logo
    }
}

export function createLogoElement(logo: LogoDefinition): HTMLElement {
    const href = logo.href ?? '/'
    const element = document.createElement('a')
    element.className = 'logo'
    element.href = href
    element.target = '_blank'
    element.rel = 'noopener noreferrer'

    element.innerHTML = `
        <img src="${logo.src}" alt="${logo.alt}" />
    `
    return element
}

export function createLogoContainer(logo: LogoDefinition): HTMLElement {
    const container = document.createElement('div')
    container.className = 'logo-container'
    container.appendChild(createLogoElement(logo))
    return container
}