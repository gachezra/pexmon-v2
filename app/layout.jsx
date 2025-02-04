import './globals.css';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Pexmon LTD - Innovating Digital Solutions',
  description: 'A cutting-edge software company revolutionizing the digital space in Kenya, delivering mobile apps, web platforms and digital services to businesses and customers accross Kenya.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
