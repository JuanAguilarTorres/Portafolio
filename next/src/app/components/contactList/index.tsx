import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/juan-carlos-aguilar-torres-929236387', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:juancarlos.agtorres@gmail.com', label: 'Mail' },
    { icon: FileText, href: '/TODO', label: 'CV' },
    { icon: Github, href: 'https://github.com/JuanAguilarTorres', label: 'GitHub' }
];

export default function ContactList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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