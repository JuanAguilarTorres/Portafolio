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
        <aside className={`bg-slate-900 text-white min-h-screen w-80 flex flex-col ${className}`}>
            <div className="p-8 flex-1">
                <div className="p-8 flex-1">
                    <SidebarHeader />
                    <SidebarNav/>
                </div>

                <div className="p-8 pt-0">
                    <SidebarSocial/>
                </div>
            </div>
        </aside>
    );
};