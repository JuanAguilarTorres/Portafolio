// Index page
import Image from "next/image";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import CardSection from '@/app/components/cards';
import ContactList from '@/app/components/contactList';

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
 * Home page component.
 * 
 * Renders the main landing page, including:
 * - About section: Brief introduction and background.
 * - Projects section: Displays a list of projects using CardSection.
 * - Contact section: Shows contact information using ContactList.
 * 
 * Uses Roboto and Roboto Mono fonts for styling.
 */
export default function Home() {
    return (
        <div className={`${roboto.variable} ${robotoMono.variable} grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 max-w-4xl mx-auto`}>
            {/* About Section */}
            <section id="about" className="space-y-6">
                <p className="text-slate-400 leading-relaxed">
                    I'm a software engineer graduated from <span className="font-bold text-white">Universidad de Costa Rica</span> with a passion for building thoughtful, 
                    well-crafted solutions. My approach to development centers on writing <span className="font-bold text-white">clean, maintainable code</span>, because 
                    I'm a firm believer in SOLID principles, DRY, and KISS, not as buzzwords, but as guiding philosophies that lead to modular, scalable systems.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    I've explored a variety of programming languages throughout my learning journey, gaining exposure to both low-level and high-level. Through projects 
                    involving languages such as <span className="font-bold text-white">C, C++, C#, Python, Java</span>, and frameworks such 
                    as <span className="font-bold text-white">Next.js</span>, which has allowed me to build a broad foundation and adapt to different 
                    approaches in software development.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    I've embraced <span className="font-bold text-white">Test-Driven Development</span> and design patterns as tools for confidence, and 
                    I'm comfortable navigating both <span className="font-bold text-white">Scrum</span> environments with Jira or ClickUp and more dynamic 
                    approaches like Extreme Programming.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    In my free time, I enjoy artistic hobbies such as composing music, drawing, and 3D modeling, finding new ways to keep myself curious and engaged.
                </p>
            </section>
            {/* Projects Section */}
            <section id="projects">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></div>
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></div>
                </div>
                <CardSection />
            </section>
            {/* Contact Section */}
            <section id="contact">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></div>
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></div>
                </div>
                <div className="text-slate-400">
                    <ContactList />
                </div>
            </section>
        </div>
    );
}