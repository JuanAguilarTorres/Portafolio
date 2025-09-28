import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

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
    title: "To add",
    description: "To add",
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
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
                        <Sidebar />
                    </div>

                    <main className="pt-24 lg:w-1/2 lg:py-24">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}