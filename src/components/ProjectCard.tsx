import { useState } from "react";
import { ModalWindow } from "./ModalWindow";

type Props = {
  img: string;
  name: string;
  link: string;
  description: string;
};
export const ProjectCard = ({ img, name, link, description }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="projects__item">
      <img
        src={img}
        alt="project-image"
        className="w-full mb-4 h-[150px] object-cover"
      />
      <div className="projects__header">
        <h3>{name}</h3>
        <a href={link}>GitHub</a>
      </div>
      <p>{description}</p>
      <button onClick={openModal}>Read More</button>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        children={description}
      ></ModalWindow>
    </div>
  );
};
