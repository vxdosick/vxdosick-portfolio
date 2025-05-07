import { ProjectCard } from "./components/ProjectCard";

function App() {
  const projects = [
    {
      img: "/public/projects/1/1.png",
      name: "React-QRCode-Scanner-and-Creator",
      link: "https://github.com/vxdosick/React-QRCode-Scanner-and-Creator.git",
      description: "123",
    },
    {
      img: "/public/projects/2/1.png",
      name: "Tensorflow-React-AI-Color-Generator",
      link: "https://github.com/vxdosick/Tensorflow-React-AI-Color-Generator.git",
      description: "123",
    },
    {
      img: "/public/projects/3/1.png",
      name: "React-Tic-Tac-Toe",
      link: "https://github.com/vxdosick/React-Tic-Tac-Toe.git",
      description: "123",
    },
    {
      img: "/public/projects/4/1.png",
      name: "Next.js-AI-Landing-Builder",
      link: "https://github.com/vxdosick/Next.js-AI-Landing-Builder.git",
      description: "123",
    },
  ];

  return (
    <div className="wrapper w-full h-full">
      <div className="container max-w-[1110px] mx-auto px-4">
        <section className="projects">
          <h2 className="text-2xl mb-3">Projects</h2>
          <div className="projects__grid grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  img={project.img}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
