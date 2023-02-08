import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header'
import Skills from '@/components/Skills';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { ChevronUpIcon } from "@heroicons/react/24/solid";
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-deep-blue text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Aurelien Gremy</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
        {/* Header */}
        <Header/>
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <Experience/>
        </section>
        {/* Skills */}
        <section id="skills" className="snap-center">
          <Skills/>
        </section>
        {/* Projects */}
        <section id="projects" className="snap-center">
          <Projects/>
        </section>
        {/* Contact Me */}
        <section id="contact" className="snap-center">
          <ContactMe/>
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <ChevronUpIcon className="h-10 w-10 text-slate-500 hover:text-slate-50"/>
            </div>
          </footer>
        </Link>
      </main>
    </div>
  )
}
