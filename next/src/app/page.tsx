// Index page
import Image from "next/image";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import CardSection from '@/app/components/cards';
import ContactList from '@/app/components/contactList';

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

export default function Home() {
    return (
        <div className={`${roboto.variable} ${robotoMono.variable} grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 max-w-4xl mx-auto`}>
            <section className="space-y-6">
                <p className="text-slate-400 leading-relaxed">
                    Lorem ipsum <span className="font-bold text-white">dolor sit</span> amet, consectetur adipiscing elit. Etiam commodo orci et odio iaculis,
                    in lacinia arcu <span className="font-bold text-white">elementum</span>. Morbi quam libero, mattis non ipsum vitae, fermentum maximus quam.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    Aliquam hendrerit <span className="font-bold text-white">augue ac</span> porta malesuada. In suscipit risus ac metus pretium euismod. Nulla ac
                    efficitur augue, eu malesuada metus. Nam ac lorem in magna elementum porta. Praesent <span className="font-bold text-white">facilisis</span> ac
                    sapien ac magna commodo, sed sodales leo auctor. In cursus eros non dolor placerat elementum.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    Aenean in <span className="font-bold text-white">ornare risus</span>. Integer nec venenatis enim, faucibus dignissim sapien. Proin nunc lectus,
                    malesuada placerat leo blandit, <span className="font-bold text-white">porttitor vestibulum</span> ligula. Curabitur auctor pharetra tortor.
                </p>
            </section>
            <section>
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></div>
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></div>
                </div>
                <CardSection />
            </section>

            <section>
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
