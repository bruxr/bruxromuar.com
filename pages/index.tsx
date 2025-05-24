import Head from 'next/head';
import Icon from '@mdi/react';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import AnimatedText from 'react-animated-text-content';
import { mdiGithub, mdiLinkedin, mdiInstagram } from '@mdi/js';

import { Experience } from '../types';
import DarkModeToggle from '../components/DarkModeToggle';
import WorkExperience from '../components/WorkExperience';

const WORK_EXPERIENCE: Experience[] = [
  {
    company: 'Scan.art',
    position: 'Senior Frontend Engineer',
    year: '2022 - Present',
  },
  {
    company: 'Bounce the Line',
    position: 'Senior Software Engineer',
    year: '2022 - 2024',
  },
  {
    company: 'Ingenuity',
    position: 'Lead Frontend Engineer',
    year: '2019 - 2021',
  },
  {
    company: 'Ingenuity',
    position: 'Software Engineer',
    year: '2016 - 2019',
  },
];

const RESUME_PATH =
  'https://storage.googleapis.com/bruxromuarcom.appspot.com/Bruxelles-Romuar-Resume.pdf';

function Home(): React.ReactElement {
  const [year, setYear] = useState('-')

  useEffect(() => {
    setYear((new Date()).getFullYear().toString())
  }, [])

  return (
    <>
      <Head>
        <title>Brux Romuar - Software Engineer</title>
        <meta name="description" content="Brux Romuar - Software Engineer" />
      </Head>
      <div className="wrap max-w">
        <header className="flex items-center">
          <div>
            <h1 className="font-medium mb-px dark:text-white">Brux Romuar</h1>
            <h2 className="text-gray-200 dark:text-cool-gray-600">Software Engineer</h2>
          </div>
          <div className="ml-auto flex">
            <DarkModeToggle />
            <a href="mailto:hello@bruxromuar.com" className="contact-btn ml-2 md:ml-4">
              Contact
            </a>
          </div>
        </header>

        <main>
          <section>
            <h3 className="font-bold text-5xl leading-tight mt-24 md:text-6xl md:mt-32 md:mr-8 md:ml-12 lg:mt-48 lg:text-8xl dark:text-white">
              <AnimatedText
                duration={1}
                interval={0.1}
                animation={{ ease: 'ease-in-out', y: '50px' }}
              >
                Building user interfaces for the modern web
              </AnimatedText>
            </h3>
            <Fade delay={1200} triggerOnce>
              <p className="text-gray-400 leading-relaxed mt-10 md:ml-56 lg:text-lg xl:w-112 xl:ml-96 dark:text-cool-gray-600">
                Hello! I&apos;m Brux Romuar, a software engineer specializing in frontend
                development. Welcome to my humble corner where I will be in the future, sharing my
                ideas.
              </p>
            </Fade>
          </section>

          <section className="section">
            <h4 className="dark:text-white">Work</h4>
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-x-4 lg:grid-cols-4 lg:grid-rows-2">
              {WORK_EXPERIENCE.map((experience, index) => (
                <WorkExperience
                  key={index}
                  position={experience.position}
                  company={experience.company}
                  year={experience.year}
                />
              ))}
              <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <button
                  type="button"
                  className="inline-block mt-6 pb- text-blue-800 border-b border-blue-800 dark:text-blue-600"
                  onClick={() => window.open(RESUME_PATH)}
                >
                  View my Resume
                  <i className="arrow-forward" />
                </button>
              </div>
            </div>
          </section>

          <section className="section md:grid md:grid-cols-[1fr_3fr] md:gap-x-4">
            <h4 className="dark:text-white">Links</h4>
            <div className="md:flex md:ml-0 md:mt-2">
              <a href="https://github.com/bruxr" rel="noopener noreferrer" className="link">
                <Icon path={mdiGithub} size="20px" className="inline-block mr-2 align-sub" />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/bruxromuar"
                rel="noopener noreferrer"
                className="link"
              >
                <Icon path={mdiLinkedin} size="20px" className="inline-block mr-2 align-sub" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/brrrux" rel="noopener noreferrer" className="link">
                <Icon path={mdiInstagram} size="20px" className="inline-block mr-2 align-sub" />
                Instagram
              </a>
            </div>
          </section>
        </main>

        <footer className="text-gray-200 mt-24 md:mt-48 lg:mt-52 dark:text-cool-gray-600">
          &copy; {year} Bruxelles Romuar
        </footer>
      </div>
    </>
  );
}

export default Home;
