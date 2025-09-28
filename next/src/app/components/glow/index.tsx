// Mouse Glow component.
'use client';
import { useState, useEffect, ReactNode, useRef } from 'react';

interface GlowWrapperProps {
    children: ReactNode;
}

export function GlowWrapper({ children }: GlowWrapperProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [glowOpacity, setGlowOpacity] = useState(0);
    const fadeAnimationRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const mainElement = e.currentTarget as HTMLElement;
            const rect = mainElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        };

        const handleMouseEnter = () => {
            setIsMouseInside(true);
            setGlowOpacity(1);

            // This is to cancel any ongoing fade animation.
            if (fadeAnimationRef.current) {
                cancelAnimationFrame(fadeAnimationRef.current);
                fadeAnimationRef.current = null;
            }
        };

        const handleMouseLeave = () => {
            setIsMouseInside(false);

            // Start fade out to remove the glow (mouse leave).
            let opacity = 1;
            const fadeOut = () => {
                opacity -= 0.05;
                if (opacity <= 0) {
                    setGlowOpacity(0);
                    fadeAnimationRef.current = null;
                    return;
                }
                setGlowOpacity(opacity);
                fadeAnimationRef.current = requestAnimationFrame(fadeOut);
            };
            fadeAnimationRef.current = requestAnimationFrame(fadeOut);
        };

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.addEventListener('mousemove', handleMouseMove);
            mainElement.addEventListener('mouseenter', handleMouseEnter);
            mainElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                mainElement.removeEventListener('mousemove', handleMouseMove);
                mainElement.removeEventListener('mouseenter', handleMouseEnter);
                mainElement.removeEventListener('mouseleave', handleMouseLeave);

                // Clean up.
                if (fadeAnimationRef.current) {
                    cancelAnimationFrame(fadeAnimationRef.current);
                }
            };
        }
    }, []);

    useEffect(() => {
        if (isMouseInside) {
            setGlowOpacity(1);

            // Cancel any ongoing fade because the mouse re-enters.
            if (fadeAnimationRef.current) {
                cancelAnimationFrame(fadeAnimationRef.current);
                fadeAnimationRef.current = null;
            }
        }
    }, [isMouseInside]);

    return (
        <main
            className="lg:flex-1 relative overflow-hidden lg:-ml-4 lg:pl-4"
            style={{
                background: glowOpacity > 0
                    ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, ${0.1 * glowOpacity}), transparent 80%)`
                    : 'transparent'
            }}
        >
            <div className="relative z-10">
                {children}
            </div>
        </main>
    );
}