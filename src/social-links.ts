interface SocialLinkDefinition {
    title: string
    url: string
    icon: string
}

export class SocialLinks {
    private links: SocialLinkDefinition[] = [];

    addLink(link: SocialLinkDefinition): void {
        this.links.push(link)
    }

    getLink(index: number): SocialLinkDefinition | undefined {
        return this.links[index]
    }

    getAllLinks(): SocialLinkDefinition[] {
        return this.links
    }
}

export function createSocialLinkElement(socialLink: SocialLinkDefinition): HTMLElement {
    const element = document.createElement('a')
    element.className = 'social-link'
    element.href = socialLink.url
    element.title = socialLink.title
    element.target = '_blank'
    element.rel = 'noopener noreferrer'
    
    element.innerHTML = `
        <img src="${socialLink.icon}" alt="${socialLink.title}" />
        <span>${socialLink.title}</span>
    `
    return element
}

export function createSocialLinksNav(links: SocialLinkDefinition[]): HTMLElement {
    const nav = document.createElement('nav')
    nav.className = 'social-links-nav'
    links.forEach(link => {
        nav.appendChild(createSocialLinkElement(link))
    })
    return nav
}