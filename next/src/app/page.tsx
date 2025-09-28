import Image from "next/image";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

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
      <div className={`${roboto.variable} ${robotoMono.variable} grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-4xl mx-auto`}>
          <div className="text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo orci et odio iaculis,
              in lacinia arcu elementum. Morbi quam libero, mattis non ipsum vitae, fermentum maximus quam.
              Aliquam hendrerit augue ac porta malesuada. In suscipit risus ac metus pretium euismod. Nulla ac
              efficitur augue, eu malesuada metus. Nam ac lorem in magna elementum porta. Praesent facilisis
              sapien ac magna commodo, sed sodales leo auctor. In cursus eros non dolor placerat elementum.
              Aenean in ornare risus. Integer nec venenatis enim, faucibus dignissim sapien. Proin nunc lectus,
              malesuada placerat leo blandit, porttitor vestibulum ligula. Curabitur auctor pharetra tortor.
          </div>
          <h2>Projects</h2>
          <div>content</div>
          <h2>Contact</h2>
          <div>content</div>
    </div>
  );
}
