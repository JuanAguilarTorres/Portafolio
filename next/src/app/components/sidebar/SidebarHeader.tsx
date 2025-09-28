// Sidebar
// Header Title component.
import React from 'react';

export const SidebarHeader: React.FC = () => {
    return (
        <header className="mb-12">
            <h1 className="text-4xl font-bold mb-2 transition-colors duration-300 hover:text-stone-300 cursor-default">
                Juan Carlos
            </h1>
            <h1 className="text-4xl font-bold mb-2 transition-colors duration-300 hover:text-stone-300 cursor-default">
                Aguilar Torres
            </h1>
            <h2 className="text-lg text-stone-300 mb-4">Software Engineer</h2>
            <p className="text-stone-400 text-s leading-relaxed">
                I develop reliable, maintainable software through clean code and solid engineering principles.
            </p>
        </header>
    );
};