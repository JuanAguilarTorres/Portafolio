// Main Layout
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { GlowWrapper } from "@/components/glow";

/**
 * Loads the Roboto font with multiple weights for use throughout the app.
 */
const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});

/**
 * Loads the Roboto Mono font with multiple weights for use throughout the app.
 */
const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"]
});

/**
 * Metadata for the application.
 */
export const metadata: Metadata = {
    title: "Juan Aguilar | Portfolio",
    description: "Juan Aguilar's portfolio",
};

/**
 * Root layout component.
 * 
 * Wraps all pages with global styles, fonts, sidebar navigation, and a glow effect wrapper.
 * 
 * @param children - The page content to render within the layout.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${roboto.variable} ${robotoMono.variable} antialiased bg-slate-800`}
            >
                <div className="lg:flex lg:gap-4">
                    {/* Sidebar navigation, sticky on large screens */}
                    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between">
                        <Sidebar />
                    </div>
                    {/* Main content area with glow effect */}
                    <GlowWrapper>
                        {children}
                    </GlowWrapper>
                </div>
            </body>
        </html>
    );
}