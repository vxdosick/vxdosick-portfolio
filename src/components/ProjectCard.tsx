import { useState } from "react";
import { ModalWindow } from "./ModalWindow";

type Props = {
  img: string;
  name: string;
  link: string;
  description: string;
  stack: string[];
};
export const ProjectCard = ({ img, name, link, description, stack }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <li className="projects__item">
      <div className="projects__image">
        <img
          src={img}
          alt="project-image"
          // className="w-full mb-4 h-[150px] object-cover rounded-[4px]"
          className="w-[360px] h-[202.5px] object-cover mb-2"
        />
      </div>
      <div className="projects__header">
        <h3 className="subtitle--text mb-2 h-[50px]">{name}</h3>
        <a href={link} target="_blank">&rarr; GitHub</a>
      </div>
      <p className="h-[80px]">{description}</p>
      <button className="button--general" onClick={openModal}>
        Read More
      </button>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        children={[img, name, link, description, stack]}
      ></ModalWindow>
    </li>
  );
};
