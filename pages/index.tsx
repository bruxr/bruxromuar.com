import Head from 'next/head';

function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Brux Romuar - Frontend Developer</title>
        <meta name="description" content="Brux Romuar - Frontend Developer" />
      </Head>
      <div className="wrap max-w-">
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
            <div className="flex-wrap md:flex md:mt-12">
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
            </div>
            <a href="#" className="inline-block mt-6 md:mt-0 lg:mt-12 lg:ml-80">
              View my Curriculum Vitae
            </a>
          </section>

          <section className="section md:flex">
            <h4>Links</h4>
            <ul className="md:ml-16 md:mt-3 md:flex lg:ml-68">
              <li className="link">
                <a href="#" rel="noopener noreferrer">
                  Github
                </a>
              </li>
              <li className="link">
                <a href="#" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="link">
                <a href="#" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li className="link">
                <a href="#" rel="noopener noreferrer">
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
