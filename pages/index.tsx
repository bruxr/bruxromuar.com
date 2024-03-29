import Head from 'next/head';
import Icon from '@mdi/react';
import { Fade } from 'react-awesome-reveal';
import AnimatedText from 'react-animated-text-content';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiInstagram } from '@mdi/js';

import DarkModeToggle from '../components/DarkModeToggle';

function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Brux Romuar - Frontend Developer</title>
        <meta name="description" content="Brux Romuar - Frontend Developer" />
      </Head>
      <div className="wrap max-w">
        <header className="flex items-center">
          <div>
            <h1 className="font-medium mb-px dark:text-white">Brux Romuar</h1>
            <h2 className="text-gray-200 dark:text-cool-gray-600">Frontend Developer</h2>
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
                Hello! I&apos;m Brux Romuar, a software developer specializing in frontend
                development. I am currently a freelancer and previously worked at{' '}
                <a href="https://ingenuity.ph/" target="_blank" rel="noopener noreferrer">
                  Ingenuity
                </a>
                . Welcome to my humble corner where I will be in the future, sharing my ideas.
              </p>
            </Fade>
          </section>

          <section className="section">
            <h4 className="dark:text-white">Work</h4>
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-x-4 lg:grid-cols-4 lg:grid-rows-2">
              <div className="experience">
                <h5 className="font-semibold dark:text-white">Head of Design</h5>
                <span className="dark:text-cool-gray-600">Ingenuity</span>
                <span className="experience-year">2021</span>
              </div>
              <div className="experience">
                <h5 className="font-semibold dark:text-white">Lead Frontend Developer</h5>
                <span className="dark:text-cool-gray-600">Ingenuity</span>
                <span className="experience-year">2018 - 2020</span>
              </div>
              <div className="experience">
                <h5 className="font-semibold dark:text-white">Software Developer</h5>
                <span className="dark:text-cool-gray-600">Ingenuity</span>
                <span className="experience-year">2016 - 2018</span>
              </div>
              <div className="experience">
                <h5 className="font-semibold dark:text-white">Web Developer</h5>
                <span className="dark:text-cool-gray-600">Freelance</span>
                <span className="experience-year">2014 - 2016</span>
              </div>
              <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <a
                  href="https://storage.googleapis.com/bruxromuarcom.appspot.com/Brux-Romuar-CV.pdf"
                  className="inline-block mt-6 pb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my Curriculum Vitae
                  <i className="arrow-forward" />
                </a>
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
              <a href="https://twitter.com/brrrux" rel="noopener noreferrer" className="link">
                <Icon path={mdiTwitter} size="20px" className="inline-block mr-2 align-sub" />
                Twitter
              </a>
              <a href="https://www.instagram.com/brrrux" rel="noopener noreferrer" className="link">
                <Icon path={mdiInstagram} size="20px" className="inline-block mr-2 align-sub" />
                Instagram
              </a>
            </div>
          </section>
        </main>

        <footer className="text-gray-200 mt-24 md:mt-48 lg:mt-52 dark:text-cool-gray-600">
          &copy; 2022 Brux Romuar
        </footer>
      </div>
    </>
  );
}

export default Home;
