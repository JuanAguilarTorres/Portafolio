import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

/**
 * Interface representing a social/contact link.
 * @property icon - The icon component to display.
 * @property href - The URL or mailto link.
 * @property label - Accessible label for the link.
 */
interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    href: string;
    label: string;
}

/**
 * Array of social/contact links to display.
 */
const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/juan-carlos-aguilar-torres/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:juancarlos.agtorres@gmail.com', label: 'Mail' },
    { icon: FileText, href: '/TODO', label: 'CV' },
    { icon: Github, href: 'https://github.com/JuanAguilarTorres', label: 'GitHub' }
];

/**
 * ContactList component.
 * 
 * Renders a responsive grid of social/contact links, each with an icon and label.
 * Each link opens in a new tab and is accessible via ARIA labels.
 */
export default function ContactList() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group"
                        aria-label={link.label}
                    >
                        <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">{link.label}</span>
                    </a>
                );
            })}
        </div>
    );
}