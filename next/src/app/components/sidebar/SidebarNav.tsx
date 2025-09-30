// Sidebar
// Navigation component.
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Interface for navigation items in the sidebar.
 * @property id - Unique identifier for the section.
 * @property label - Display label for the navigation link.
 * @property href - Anchor or route for the navigation link.
 */
interface NavItem {
    id: string;
    label: string;
    href: string;
}

/**
 * List of navigation items for the sidebar.
 */
const navItems: NavItem[] = [
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'projects', label: 'PROJECTS', href: '#projects' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
];

/**
 * SidebarNav component.
 * 
 * Renders navigation links for the sidebar, highlights the active section,
 * and smoothly scrolls to sections on click. Updates the active section based
 * on scroll position and URL hash.
 */
export const SidebarNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const router = useRouter();
    const pathname = usePathname();

    /**
     * Handles navigation link clicks.
     * Scrolls to the section if present, otherwise navigates to the route.
     */
    const handleNavClick = (item: NavItem) => {
        setActiveSection(item.id);
        const element = document.querySelector(item.href);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/${item.href}`);
        }
    };

    /**
     * Updates the active section based on scroll position.
     * Highlights the section closest to the top of the viewport.
     */
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.querySelector(item.href)
            }));

            const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
            
            if (isNearBottom) {
                setActiveSection(navItems[navItems.length - 1].id);
                return;
            }

            let closestSection = sections[0];
            let closestDistance = Infinity;

            sections.forEach(section => {
                if (!section.element) return;
                const rect = section.element.getBoundingClientRect();
                const distance = Math.abs(rect.top);
                
                if (rect.top <= 150 && distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            if (closestSection) {
                setActiveSection(closestSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * Handles navigation to a section if a hash is present in the URL.
     * Smoothly scrolls to the section and updates the active section.
     */
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