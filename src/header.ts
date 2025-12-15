import { Logo, createLogoContainer } from './logo.js'
import { SocialLinks, createSocialLinksNav } from './social-links.js'
import githubIcon from './assets/github.svg'
import linkedinIcon from './assets/linkedin.svg'

export function insertHeader(): void {
    const header = document.createElement('header')
    header.className = 'site-header'

    const logo = new Logo()
    logo.setLogo({
        src: '/assets/logo.svg',
        alt: 'My Logo',
        href: '/'
    })
    const logoElement = createLogoContainer(logo.getLogo()!)
    header.appendChild(logoElement)

    const socialLinks = new SocialLinks()
    socialLinks.addLink({
        title: 'GitHub',
        url: 'https://github.com/yourname',
        icon: githubIcon
    })
    socialLinks.addLink({
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/yourname',
        icon: linkedinIcon
    })

    const socialNav = createSocialLinksNav(socialLinks.getAllLinks())
    header.appendChild(socialNav)

    document.body.insertAdjacentElement('afterbegin', header)
}
