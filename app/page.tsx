'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from 'lottie-react';
import heroAnimation from '@/public/lottie/web.json';
import innovationAnimation from '@/public/lottie/build.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div animate={{ y: [-10, 10] }} transition={{ repeat: Infinity, duration: 2 }}>
          <Lottie animationData={heroAnimation} className="w-48 h-48" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mt-6">Pexmon LTD</h1>
        <p className="text-lg mt-4 max-w-2xl">
          Innovating digital solutions for the future. We build impactful software that transforms businesses and user experiences.
        </p>
      </section>

      {/* About Section */}
      <motion.section className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-6"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="text-md max-w-3xl text-center mt-4">
          Pexmon LTD is a software company based in Kenya, specializing in cutting-edge web and mobile applications. Our goal is to push technological boundaries and deliver excellence.
        </p>
        <Lottie animationData={innovationAnimation} className="w-50 h-50" />
      </motion.section>

      {/* Projects Section */}
      <ProjectSection
        title="EventKick"
        description="Discover and create events seamlessly. The ultimate event hub."
        bgColor="bg-[#131324]"
        textColor="text-white"
        link="https://eventkick.ke"
      />
      <ProjectSection
        title="VarsityRank"
        description="University reviews for Kenyan students to make informed decisions, empowering students with real insights."
        bgColor="bg-[#f5deb3]"
        textColor="text-black"
        link="https://varsityrank.pexmon.one"
      />
      <ProjectSection
        title="NikoKadi"
        description="Kenya’s first online poker experience, redefining digital gaming."
        bgColor="bg-[#0a0c10]"
        textColor="text-white"
        link="https://kadi.pexmon.one"
      />

      {/* Contact Section */}
      <motion.section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-md mt-4">Let's build something amazing together.</p>
        <p className="text-lg mt-2 font-semibold">Email: <a href="mailto:ezragach@pexmon.one" className="underline">ezragach@pexmon.one</a></p>
      </motion.section>
    </main>
  );
}

function ProjectSection({ title, description, bgColor, textColor, link }: any) {
  return (
    <motion.section
      className={`${bgColor} ${textColor} min-h-screen flex flex-col items-center justify-center px-6`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-md max-w-lg text-center mt-4">{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-4 underline text-lg">Explore</Link>
    </motion.section>
  );
}
