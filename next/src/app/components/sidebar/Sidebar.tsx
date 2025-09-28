// Sidebar
// Main body component.
'use client';

import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarSocial } from './SidebarSocial';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    return (
        <aside className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white 
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