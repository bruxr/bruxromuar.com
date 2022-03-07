import Head from 'next/head';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiInstagram } from '@mdi/js';

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
            <h1 className="font-medium mb-px">Brux Romuar</h1>
            <h2 className="text-gray-200">Frontend Developer</h2>
          </div>
          <a href="mailto:hello@bruxromuar.com" className="contact-btn ml-auto">
            Contact
          </a>
        </header>

        <main>
          <section>
            <h3 className="font-bold text-5xl leading-tight mt-24 md:text-6xl md:mt-32 md:mr-8 md:ml-12 lg:mt-48 lg:text-8xl">
              Building user interfaces for the modern web
            </h3>
            <p className="text-gray-400 leading-relaxed mt-10 md:ml-56 lg:text-lg xl:w-112 xl:ml-96">
              Hello! I&apos;m Brux Romuar, a software developer specializing in frontend
              development. I am currently a freelancer and previously worked at{' '}
              <a href="https://ingenuity.ph/" target="_blank" rel="noopener noreferrer">
                Ingenuity
              </a>
              . Welcome to my humble corner where I will be in the future, sharing my ideas.
            </p>
          </section>

          <section className="section">
            <h4>Work</h4>
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-x-4 lg:grid-cols-4 lg:grid-rows-2">
              <div className="experience">
                <h5 className="font-semibold">Head of Design</h5>
                Ingenuity
                <span className="experience-year">2021</span>
              </div>
              <div className="experience">
                <h5 className="font-semibold">Lead Frontend Developer</h5>
                Ingenuity
                <span className="experience-year">2018 - 2020</span>
              </div>
              <div className="experience">
                <h5>Software Developer</h5>
                Ingenuity
                <span className="experience-year">2016 - 2018</span>
              </div>
              <div className="experience">
                <h5>Web Developer</h5>
                Freelance
                <span className="experience-year">2014 - 2016</span>
              </div>
              <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <a href="#" className="inline-block mt-6 pb-1">
                  View my Curriculum Vitae
                  <i className="arrow-forward" />
                </a>
              </div>
            </div>
          </section>

          <section className="section md:grid md:grid-cols-[1fr_3fr] md:gap-x-4">
            <h4>Links</h4>
            <ul className="md:flex md:ml-0 md:mt-2">
              <li className="link">
                <a href="https://github.com/bruxr" rel="noopener noreferrer">
                  <Icon path={mdiGithub} size="20px" className="inline-block mr-2 align-sub" />
                  Github
                </a>
              </li>
              <li className="link">
                <a href="https://www.linkedin.com/in/bruxromuar" rel="noopener noreferrer">
                  <Icon path={mdiLinkedin} size="20px" className="inline-block mr-2 align-sub" />
                  LinkedIn
                </a>
              </li>
              <li className="link">
                <a href="https://twitter.com/brrrux" rel="noopener noreferrer">
                  <Icon path={mdiTwitter} size="20px" className="inline-block mr-2 align-sub" />
                  Twitter
                </a>
              </li>
              <li className="link">
                <a href="https://www.instagram.com/brrrux" rel="noopener noreferrer">
                  <Icon path={mdiInstagram} size="20px" className="inline-block mr-2 align-sub" />
                  Instagram
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer className="text-gray-200 mt-24 md:mt-48 lg:mt-52">&copy; 2022 Brux Romuar</footer>
      </div>
    </>
  );
}

export default Home;
