// Sidebar
// Header Title component.
import React from 'react';

export const SidebarHeader: React.FC = () => {
    return (
        <header className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Juan Carlos Aguilar Torres</h1>
            <h2 className="text-lg text-slate-300 mb-4">Software Engineer</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
                I develop reliable, maintainable software through clean code and solid engineering principles.
            </p>
        </header>
    );
};