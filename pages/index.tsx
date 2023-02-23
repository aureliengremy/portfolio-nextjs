import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import Abilities from "@/components/Abilities";
import Head from "next/head";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { GetStaticProps, GetServerSideProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchExperiences } from "@/utils/fetchExpericences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-deep-blue text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Aurelien Gremy</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto">
        {/* Header */}
        <Header socials={socials} />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo}/>
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences}/>
        </section>
        {/* Skills */}
        <section id="skills" className="snap-center">
          <Abilities skills={skills} />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>
        {/* Contact Me */}
        <section id="contact" className="snap-center">
          <ContactMe pageInfo={pageInfo} />
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <ChevronUpIcon className="h-10 w-10 text-slate-500 hover:text-slate-50" />
            </div>
          </footer>
        </Link>
      </main>
    </div>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // if you use: 
    // revalidate: 10,
  };
};
