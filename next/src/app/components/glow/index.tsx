// Mouse Glow component.
'use client';
import { useState, useEffect, ReactNode, useRef } from 'react';

/**
 * Props for the GlowWrapper component.
 * @property children - The content to be rendered inside the wrapper.
 */
interface GlowWrapperProps {
    children: ReactNode;
}

/**
 * GlowWrapper component.
 * 
 * Wraps its children with a mouse-following radial glow effect.
 * The glow appears when the mouse enters the main area and fades out smoothly on mouse leave.
 * 
 * - Tracks mouse position relative to the main element.
 * - Handles fade-in and fade-out of the glow using requestAnimationFrame.
 * - Cleans up event listeners and animation frames on unmount.
 * 
 * @param children - React nodes to render inside the glowing main area.
 */
export function GlowWrapper({ children }: GlowWrapperProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [glowOpacity, setGlowOpacity] = useState(0);
    const fadeAnimationRef = useRef<number | null>(null);

    useEffect(() => {
        /**
         * Handles mouse movement and updates the glow position.
         */
        const handleMouseMove = (e: MouseEvent) => {
            const mainElement = e.currentTarget as HTMLElement;
            const rect = mainElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        };

        /**
         * Handles mouse entering the main area, shows the glow.
         */
        const handleMouseEnter = () => {
            setIsMouseInside(true);
            setGlowOpacity(1);

            // Cancel any ongoing fade animation.
            if (fadeAnimationRef.current) {
                cancelAnimationFrame(fadeAnimationRef.current);
                fadeAnimationRef.current = null;
            }
        };

        /**
         * Handles mouse leaving the main area, fades out the glow.
         */
        const handleMouseLeave = () => {
            setIsMouseInside(false);

            // Start fade out animation.
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

                // Clean up any ongoing fade animation.
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
                    ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 76, 76, ${0.05 * glowOpacity}), transparent 80%)`
                    : 'transparent'
            }}
        >
            <div className="relative z-10">
                {children}
            </div>
        </main>
    );
}