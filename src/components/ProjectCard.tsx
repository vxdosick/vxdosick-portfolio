type Props = {
  img: string;
  name: string;
  link: string;
  description: string;
}
export const ProjectCard = ({img, name, link, description}: Props) => {
  return (
    <div className="projects__item">
      <img src={img} alt="project-image" className="w-full mb-4 h-[150px]" />
      <div className="projects__header">
        <h3>{name}</h3>
        <a href="#">{link}</a>
      </div>
      <p>
        {description}
      </p>
      <button>Read More</button>
    </div>
  );
};
