interface NavLinks {
    label: string, 
    href: string
}

const menuItems:NavLinks[] = [
    { label: 'Services', href: '/services' },
    { label: 'Locations', href: '/locations' },
    { label: 'Resources', href: '/resources' },
    {label: 'Blog', href: '/blog'},
    { label: 'About', href: '/about' },
]

export {menuItems}