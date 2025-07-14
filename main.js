
function insertHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';

    // Logo
    const logo = document.createElement('a');
    logo.href = '/';
    logo.className = 'logo';
    logo.textContent = 'My Portfolio';
    header.appendChild(logo);

    // Navigation
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'nav-list';

    const pages = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about.html' },
        { name: 'Projects', link: '/projects.html' },
        { name: 'Contact', link: '/contact.html' }
    ];

    pages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = page.link;
        a.textContent = page.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    // Social media links block
    const socialDiv = document.createElement('div');
    socialDiv.className = 'social-links';

    const socials = [
        { name: 'GitHub', link: 'https://github.com/yourusername', icon: '🐙' },
        { name: 'LinkedIn', link: 'https://linkedin.com/in/yourusername', icon: '🔗' },
        { name: 'Twitter', link: 'https://twitter.com/yourusername', icon: '🐦' }
    ];

    socials.forEach(social => {
        const a = document.createElement('a');
        a.href = social.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = social.name;
        a.textContent = social.icon;
        socialDiv.appendChild(a);
    });
    header.appendChild(socialDiv);

    document.body.insertAdjacentElement('afterbegin', header);
}

window.addEventListener('DOMContentLoaded', insertHeader);