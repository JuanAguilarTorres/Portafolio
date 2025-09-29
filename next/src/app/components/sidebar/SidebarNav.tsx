// Sidebar
// Navigation component.
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavItem {
    id: string;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'projects', label: 'PROJECTS', href: '#projects' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const SidebarNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (item: NavItem) => {
        setActiveSection(item.id);
        const element = document.querySelector(item.href);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/${item.href}`);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.querySelector(item.href)
            }));

            const currentSection = sections.find(section => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(id);
                }, 100);
            }
        }
    }, [pathname]);

    return (
        <nav className="mb-12">
            <ul className="space-y-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => handleNavClick(item)}
                            className={`group flex items-center text-xs font-bold tracking-widest transition-all duration-300 py-3 px-2 -my-3 -mx-2 ${
                                activeSection === item.id
                                    ? 'text-white'
                                    : 'text-stone-400 hover:text-white'
                            }`}
                        >
                            <span
                                className={`h-px bg-stone-500 transition-all duration-300 mr-4 ${
                                    activeSection === item.id
                                        ? 'w-16 bg-white'
                                        : 'w-8 group-hover:w-16 group-hover:bg-white'
                                }`}
                            />
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};