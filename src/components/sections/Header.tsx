//libs
import { useState } from 'react';
import clsx from 'clsx';

// icons
import { HiMenu, HiX } from 'react-icons/hi';

//components
import Button from '../ui/Button';

// data
import { menuItems } from '../../data/nav';


export default function Header({class: className}: {class?: string}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={clsx("w-full bg-white shadow-sm border-b border-gray-100", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img 
                                src="/imgs/logo.webp" 
                                alt="Swift Logix" 
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    {/* Navigation Menu - Single menu with responsive classes */}
                    <nav className={clsx(
                        'lg:flex lg:items-center lg:space-x-8',
                        'absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto',
                        'w-full lg:w-auto bg-white lg:bg-transparent',
                        'border-t lg:border-t-0 border-gray-200 lg:border-none',
                        'px-4 lg:px-0 py-4 lg:py-0',
                        'shadow-lg lg:shadow-none z-50',
                        {
                            'block': isMobileMenuOpen,
                            'hidden': !isMobileMenuOpen
                        }
                    )}>
                        {menuItems.map((item, index) => (
                            <a 
                                key={index}
                                href={item.href} 
                                className={clsx(
                                    'block lg:inline',
                                    'font-medium',
                                    'py-2 lg:py-0',
                                    'text-gray-800 hover:text-orange-600',
                                    'transition-colors duration-200'
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                        
                        {/* Mobile Buttons */}
                        <div className={clsx(
                            'block lg:hidden mt-4 space-y-2'
                        )}>
                            <Button 
                                href="/login" 
                                isGhost={true}
                                class="w-full"
                            >
                                Login
                            </Button>
                            <Button 
                                href="/request-account" 
                                isGhost={false}
                                class="w-full"
                            >
                                Request account
                            </Button>
                        </div>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className={clsx(
                        'hidden lg:flex items-center space-x-3'
                    )}>
                        <Button 
                            href="/login" 
                            isGhost={true}
                        >
                            Login
                        </Button>
                        <Button 
                            href="/request-account" 
                            isGhost={false}
                        >
                            Request account
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className={clsx(
                                'inline-flex items-center justify-center p-2',
                                'rounded-md text-gray-800 hover:text-orange-600 hover:bg-gray-100',
                                'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500'
                            )}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Toggle main menu</span>
                            {isMobileMenuOpen ? (
                                <HiX className="h-6 w-6" />
                            ) : (
                                <HiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}