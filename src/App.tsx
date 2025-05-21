import { ProjectCard } from "./components/ProjectCard";

function App() {
  const projects = [
    {
      img: [
        "/projects/1/1.png",
        "/projects/1/2.png",
        "/projects/1/3.png",
        "/projects/1/4.png",
      ],
      name: "React-QRCode-Scanner-and-Creator",
      link: "https://github.com/vxdosick/React-QRCode-Scanner-and-Creator.git",
      description:
        "Application for creating, scanning, saving, and working with qr codes.",
      stack: ["React", "TypeScript", "Tailwind"],
      demo: "https://qrcode-ap9j.onrender.com",
    },
    {
      img: ["/projects/3/1.png", "/projects/3/2.png", "/projects/3/3.png"],
      name: "React-Tic-Tac-Toe",
      link: "https://github.com/vxdosick/React-Tic-Tac-Toe.git",
      description: "A game of tic-tac-toe with a friend.",
      stack: ["React", "JavaScript", "CSS"],
      demo: "https://react-tic-tac-toe-ip25.onrender.com",
    },
    {
      img: ["/projects/7/1.png", "/projects/7/2.png", "/projects/7/3.png"],
      name: "React-ToDoLost-WinWinTravel-Testtask",
      link: "https://github.com/vxdosick/wwt-technical-task-light-vxdosick.git",
      description: "Test task - task manager.",
      stack: ["React", "CSS", "TypeScript"],
    },
    {
      img: ["/projects/5/1.png", "/projects/5/2.png", "/projects/5/3.png"],
      name: "Landing-Adsite-Testtask",
      link: "https://github.com/vxdosick/Landing-Adsite-Testtask.git",
      description: "Test assignment layout of a website for the sale of cars.",
      stack: ["HTML", "Tailwind", "JavaScript"],
      demo: "https://vxdosick.github.io/Landing-Adsite-Testtask/",
    },
    {
      img: [
        "/projects/6/1.png",
        "/projects/6/2.png",
        "/projects/6/3.png",
        "/projects/6/4.png",
        "/projects/6/5.png",
      ],
      name: "Landing-RealEstate",
      link: "https://github.com/vxdosick/HTML_CSS_JS_Landing_RealEstate.git",
      description: "Layout of the bouqing site",
      stack: ["HTML", "CSS", "JavaScript"],
      demo: "https://vxdosick.github.io/Landing-RealEstate/",
    },
    {
      img: ["/projects/4/1.png", "/projects/4/2.png"],
      name: "Next.js-AI-Landing-Builder",
      link: "https://github.com/vxdosick/Next.js-AI-Landing-Builder.git",
      description: "AI-based web page layout generator",
      stack: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      img: ["/projects/2/1.png", "/projects/2/2.png"],
      name: "Tensorflow-React-AI-Color-Generator",
      link: "https://github.com/vxdosick/Tensorflow-React-AI-Color-Generator.git",
      description: "AI-based matching colour generator.",
      stack: ["React", "TypeScript", "Scss", "TensoFlowJs"],
    },
  ];

  return (
    <div className="wrapper w-full h-full">
      <div className="container max-w-[1110px] mx-auto px-4">
        <header className="header flex items-center justify-between mb-[50px] py-3.5 border-b border-gray-600">
          <a className="logo" href="/">
            vxdosick
          </a>
          <nav className="header__nav">
            <ul className="flex gap-5">
              <li>
                <a href="#hero">Hero</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#languages">Languages</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section
            id="hero"
            className="hero mb-[50px] flex items-start justify-between gap-5"
          >
            <div className="hero__info">
              <div className="hero__header flex flex-col gap-6 items-center mb-5">
                <img
                  className="rounded-full w-[200px] h-[200px] object-cover"
                  src="/icons/vxdosick2.jpg"
                  alt="personal photo"
                />
                <div className="hero__name text-center">
                  <h1 className="hero__title text-4xl">Vadym Foteniuk</h1>
                  <h2 className="hero__subtitle text-2xl">
                    Frontend Developer
                  </h2>
                </div>
              </div>
              <p className="hero__about text-center">
                Hi, my main occupation is web development with artificial
                intelligence features. Recently I have managed to get 1 year of
                commercial experience. I create minimalistic and stylish web
                applications, especially successful ones I try to bring to
                startup level and monetise. In addition, I continue to learn and
                improve my skills in AI development in Python. I strive to grow
                in a team of professionals and participate in projects of
                various scales at the level of intern or junior specialist.
              </p>
            </div>
          </section>
          <section className="cta mb-[50px] relative">
            <div className="cta__decoration border-t border-gray-600 absolute w-full translate-y-[-50%] top-1/2"></div>
            <div className="cta__container relative">
              <nav>
                <ul className="cta__buttons flex gap-5 justify-center">
                  <li>
                    <a
                      className="cta__download"
                      href="/files/Vadym Foteniuk.pdf"
                      download={"Vadym Foteniuk CV.pdf"}
                    >
                      Download CV
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          <div className="skill__container flex justify-between gap-5">
            <section id="skills" className="skills mb-[50px] relative">
              <p className="skills__decoration flex items-start absolute top-[-35px] text-white">
                &darr;
              </p>
              <h2 className="title--general">Skills</h2>
              <ul className="skills__list grid grid-cols-3 gap-x-7 gap-y-13">
                <li className="flex items-center gap-2">
                  <img className="w-8 h-8" src="/tech/html.svg" alt="html" />
                  <p>HTML</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/tech/css.svg" className="w-8 h-8" alt="css" />
                  <p>CSS</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/javascript.svg"
                    className="w-8 h-8"
                    alt="javascript"
                  />
                  <p>JavaScript</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/typescript.svg"
                    className="w-8 h-8"
                    alt="typescript"
                  />
                  <p>TypeScript</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/reactjs.svg"
                    className="w-8 h-8"
                    alt="reactjs"
                  />
                  <p>React.js</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/nextjs.svg"
                    className="w-8 h-8"
                    alt="nextjs"
                  />
                  <p>Next.js</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/tech/scss.svg" className="w-8 h-8" alt="scss" />
                  <p>Scss</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/tailwindcss.svg"
                    className="w-8 h-8"
                    alt="tailwindcss"
                  />
                  <p>TailwindCSS</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/nodejs.svg"
                    className="w-8 h-8"
                    alt="nodejs"
                  />
                  <p>Node.js</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/express.svg"
                    className="w-8 h-8"
                    alt="express"
                  />
                  <p>Express</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/mongodb.svg"
                    className="w-8 h-8"
                    alt="mongodb"
                  />
                  <p>MongoDB</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/docker.svg"
                    className="w-8 h-8"
                    alt="docker"
                  />
                  <p>Docker</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/tech/git.svg" className="w-8 h-8" alt="git" />
                  <p>Git</p>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/tech/tensorflowjs.svg"
                    className="w-8 h-8"
                    alt="tensorflowjs"
                  />
                  <p>TensorFlow.js</p>
                </li>
              </ul>
            </section>
            <div>
              <section id="languages" className="languages mb-[50px]">
                <div className="languages__title flex items-start gap-2">
                  <p className="skills__decoration">&rarr;</p>
                  <h2 className="title--general">Languages</h2>
                </div>
                <ul className="flex flex-col gap-7">
                  <li className="flex items-center gap-2">
                    <img
                      className="w-8 h-8"
                      src="/icons/planet.png"
                      alt="english"
                    />
                    <p>English: B1 – Intermediate (working on B2)</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      className="w-8 h-8"
                      src="/icons/poland.png"
                      alt="polish"
                    />
                    <p>Polish: B2 – Upper-Intermediate</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      className="w-8 h-8"
                      src="/icons/ukraine.png"
                      alt="ukrainian"
                    />
                    <p>Ukrainian: native</p>
                  </li>
                </ul>
              </section>
              <p className="skills__decoration flex justify-start mb-[10px] text-white">
                &darr;
              </p>
              <section className="education mb-[50px]">
                <h2 className="title--general">Education</h2>
                <div className="flex items-center gap-2 mb-3">
                  <img src="/icons/aeh.png" className="w-8" alt="AEH" />
                  <a href="https://vizja.pl/en/">
                    University of Economics and Human Sciences in Warsaw
                  </a>
                </div>
                <div>
                  <p>
                    Informatics Sciences (Web-development, AI and Data Science)
                  </p>
                  <p>2022 - 2026</p>
                </div>
              </section>
            </div>
          </div>
          <section id="projects" className="projects mb-[50px]">
            <h2 className="title--general">Projects</h2>
            <ul className="projects__grid grid grid-cols-3 gap-4">
              {projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    img={project.img}
                    name={project.name}
                    link={project.link}
                    description={project.description}
                    stack={project.stack}
                    demo={project.demo}
                  />
                );
              })}
            </ul>
          </section>
          <section id="testimonials" className="testimonials mb-[50px]">
            <h2 className="title--general">Testimonials</h2>
            <nav className="testimonials__list">
              <ul className="text-black grid grid-cols-1 gap-5">
                <li className="border border-white bg-white px-4 py-4">
                  <h3 className="title--text">DOT Agency</h3>
                  <p className="subtitle--general">
                    References from past employers
                  </p>
                  <p className="mb-5">
                    "Working with Vadym has been a true pleasure. Not only did
                    he handle tasks excellently, but he also approached his work
                    with great enthusiasm. This enthusiasm, combined with his
                    professionalism and attention to detail, made him a very
                    valuable team member. I see great potential in him for
                    long-term collaboration, both in freelance projects and in
                    more permanent roles. Highly recommend!"
                  </p>
                  <div className="testimonials__info flex justify-between items-end">
                    <div className="testimonials__author flex items-center gap-4">
                      <img
                        className="border border-black rounded-full"
                        src="/icons/avatar.png"
                        alt="icon"
                      />
                      <div>
                        <h3>Oleg R. | Founder</h3>
                        <div className="flex gap-5">
                          <p>Frontend Development Sep 2024</p>
                          <div className="flex items-center gap-1">
                            <img
                              className="w-5"
                              src="/icons/verified.png"
                              alt=""
                            />
                            <p>Verified</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://www.upwork.com/freelancers/~01cfd2f56cdc4a7512"
                      target="_blank"
                      className="flex gap-2 items-center"
                    >
                      <img src="/icons/link.png" alt="Link" />
                      <p>UpWork</p>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </section>
          <section id="contacts" className="contacts mb-[50px]">
            <h2 className="title--general">Contacts</h2>
            <nav>
              <ul className="contacts__list gap-5 flex flex-wrap justify-around">
                <li>
                  <a
                    href="mailto:vadymfoteniuk.w@gmail.com"
                    className="flex flex-col items-center gap-0.5"
                  >
                    <img className="w-10" src="/contacts/mail.png" alt="mail" />
                    <p>Mail</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vadym-foteniuk-423a53318/"
                    target="_blank"
                    className="flex flex-col items-center gap-0.5"
                  >
                    <img
                      className="w-10"
                      src="/contacts/linkedin.png"
                      alt="linkedin"
                    />
                    <p>LinkedIn</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vxdosick"
                    target="_blank"
                    className="flex flex-col items-center gap-0.5"
                  >
                    <img
                      className="w-10"
                      src="/contacts/github.png"
                      alt="github"
                    />
                    <p>GitHub</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~01cfd2f56cdc4a7512"
                    target="_blank"
                    className="flex flex-col items-center gap-0.5"
                  >
                    <img
                      className="w-10"
                      src="/contacts/upwork.png"
                      alt="upwork"
                    />
                    <p>UpWork</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/vxdosick"
                    target="_blank"
                    className="flex flex-col items-center gap-0.5"
                  >
                    <img
                      className="w-10"
                      src="/contacts/telegram.png"
                      alt="telegram"
                    />
                    <p>Telegram</p>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </main>
        <footer className="py-3.5 border-t border-gray-600">
          <div className="flex flex-col items-center">
            <a className="logo" href="/">
              vxdosick
            </a>
            <p>Strength in consistency</p>
            <p>
              &copy; {new Date().getFullYear() > 2025 ? "2025 - " : ""}
              {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
