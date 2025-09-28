// Sidebar
// Main body component.
'use client';

import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarContent } from './SidebarContent';
import { SidebarSocial } from './SidebarSocial';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    return (
        <aside className={`bg-slate-900 text-white min-h-screen w-80 flex flex-col ${className}`}>
            <div className="p-8 flex-1">
                <SidebarHeader />
                <SidebarNav />
                <SidebarContent />
                <SidebarSocial />
                <SidebarFooter />
            </div>
        </aside>
    );
};