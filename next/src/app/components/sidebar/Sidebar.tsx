// Sidebar
// Main body component.
'use client';

import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarSocial } from './SidebarSocial';

/**
 * Props for the Sidebar component.
 * @property className - Optional additional CSS classes for styling.
 */
interface SidebarProps {
    className?: string;
}

/**
 * Sidebar component.
 * 
 * Renders the main sidebar layout, including:
 * - SidebarHeader: Displays the header or profile section.
 * - SidebarNav: Navigation links for the site.
 * - SidebarSocial: Social media/contact icons.
 * 
 * The sidebar uses a vertical gradient background and is responsive for different screen sizes.
 * 
 * @param className - Optional additional CSS classes.
 */
export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    return (
        <aside className={`bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 text-white 
                          h-auto lg:min-h-screen w-full lg:w-120 
                          flex flex-col ${className}`}>
            <div className="flex flex-col justify-between h-full py-4 lg:py-8 mt-6 lg:mt-0">
                <div className="flex-1 flex flex-col justify-center px-4 lg:px-8">
                    <SidebarHeader />
                    <SidebarNav/>
                </div>
                <div className="px-4 lg:px-8">
                    <SidebarSocial />
                </div>
            </div>
        </aside>
    );
};