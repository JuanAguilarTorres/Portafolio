// Sidebar
// Navegation component.
'use client';

import React, { useState } from 'react';

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

    const handleNavClick = (item: NavItem) => {
        setActiveSection(item.id);
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="mb-12">
            <ul className="space-y-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => handleNavClick(item)}
                            className={`group flex items-center text-xs font-bold tracking-widest transition-all duration-300 py-3 px-2 -my-3 -mx-2 ${activeSection === item.id
                                    ? 'text-white'
                                    : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            <span
                                className={`h-px bg-slate-600 transition-all duration-300 mr-4 ${activeSection === item.id
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