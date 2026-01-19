interface SocialLinkDef {
    title: string
    url: string
    icon: string
}

export class SocialLinks {
    private links: SocialLinkDef[] = [];

    addLink(link: SocialLinkDef): void {
        this.links.push(link)
    }

    getLink(index: number): SocialLinkDef | undefined {
        return this.links[index]
    }

    getAllLinks(): SocialLinkDef[] {
        return this.links
    }
}

export function createSocialLinkElement(socialLink: SocialLinkDef): HTMLElement {
    const element = document.createElement('a')
    element.className = 'social-link'
    element.href = socialLink.url
    element.target = '_blank'
    element.rel = 'noopener noreferrer'

    element.title = socialLink.title
    element.setAttribute('aria-label', `Open ${socialLink.title}`)

    element.innerHTML = `
        <img
            class="social-link_icon"
            src="${socialLink.icon}"
            alt="${socialLink.title}"
        />
        <span class="social-link_label">
            ${socialLink.title}
        </span>
    `
    return element
}

export function createSocialLinksNav(links: SocialLinkDef[]): HTMLElement {
    const nav = document.createElement('nav')
    nav.className = 'social-links-nav'
    nav.setAttribute('aria-label', 'Social links')

    links.forEach(link => {
        nav.appendChild(createSocialLinkElement(link))
    })
    return nav
}