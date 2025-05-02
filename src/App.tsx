import {ProjectCard} from "./components/ProjectCard"

function App() {
  const projects = {

  }

  return (
    <div className="wrapper w-full h-full">
      <div className="container max-w-[1110px] mx-auto px-4">
        <section className="projects">
          <h2 className="text-2xl mb-3">Projects</h2>
          <div className="projects__grid grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            {/* <ProjectCard /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
