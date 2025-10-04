// Sidebar
// Social Links component.
import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

// Define the structure for social/contact links
interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    href: string;
    label: string;
}

// Array of social/contact links to display
const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/juan-carlos-aguilar-torres/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:juancarlos.agtorres@gmail.com', label: 'Mail' },
    { icon: FileText, href: '/TODO', label: 'CV' },
    { icon: Github, href: 'https://github.com/JuanAguilarTorres', label: 'GitHub' }
];

/**
 * Sidebar Social component.
 * 
 * Renders social media/contact icons with links.
 * Each icon is clickable and opens the respective link.
 */
export const SidebarSocial: React.FC = () => {
    return (
        <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors duration-300"
                        aria-label={link.label}
                    >
                        <IconComponent size={20} />
                    </a>
                );
            })}
        </div>
    );
};