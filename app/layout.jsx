import './globals.css';
import Head from "next/head";

export const metadata = {
  title: 'Pexmon LTD - Innovating Digital Solutions',
  description: 'A cutting-edge software company revolutionizing the digital space in Kenya, delivering mobile apps, web platforms and digital services to businesses and customers accross Kenya.',
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={`bg-black text-white`}>{children}</body>
    </html>
  );
}
