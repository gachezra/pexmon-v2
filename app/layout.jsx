import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { Press_Start_2P, Roboto, Lato } from 'next/font/google';

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' });
const lato = Lato({ weight: '400', subsets: ['latin'], display: 'swap' });

const fonts = [pressStart2P, roboto, lato];
const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

export const metadata = {
  title: 'Pexmon LTD - Innovating Digital Solutions',
  description: 'A cutting-edge software company revolutionizing the digital space in Kenya, delivering mobile apps, web platforms and digital services to businesses and customers across Kenya.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${randomFont.className} bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}