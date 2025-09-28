// Main Layout
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { GlowWrapper } from "@/components/glow";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"]
});

export const metadata: Metadata = {
    title: "Juan Aguilar | Portfolio",
    description: "Juan Aguilar's portfolio",
};

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
                    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between">
                        <Sidebar />
                    </div>
                    <GlowWrapper>
                        {children}
                    </GlowWrapper>
                </div>
            </body>
        </html>
    );
}