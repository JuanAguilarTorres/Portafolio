import React from 'react';
import { Github, Linkedin} from 'lucide-react';

interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
];

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
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                        aria-label={link.label}
                    >
                        <IconComponent size={20} />
                    </a>
                );
            })}
        </div>
    );
};