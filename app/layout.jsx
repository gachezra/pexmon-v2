import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { 
  Press_Start_2P,
  Bangers,
  Permanent_Marker,
  VT323,
  Righteous,
  Creepster,
  Comic_Neue,
  Unbounded
} from 'next/font/google';

// Initialize all fonts
const pressStart2P = Press_Start_2P({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const bangers = Bangers({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const permanentMarker = Permanent_Marker({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const vt323 = VT323({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const righteous = Righteous({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const creepster = Creepster({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const comicNeue = Comic_Neue({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

const unbounded = Unbounded({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap' 
});

// Array of all fonts
const fonts = [
  pressStart2P,
  bangers,
  permanentMarker,
  vt323,
  righteous,
  creepster,
  comicNeue,
  unbounded
];

// Get random font - this will be evaluated on each page load
const getRandomFont = () => fonts[Math.floor(Math.random() * fonts.length)];

export const metadata = {
  title: 'Pexmon LTD - Innovating Digital Solutions',
  description: 'A cutting-edge software company revolutionizing the digital space in Kenya, delivering mobile apps, web platforms and digital services to businesses and customers across Kenya.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  // Get a random font for each render
  const randomFont = getRandomFont();
  
  return (
    <html lang="en">
      <body className={`${randomFont.className} bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
