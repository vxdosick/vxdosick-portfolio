import { useState } from "react";
import { ModalWindow } from "./ModalWindow";

type Props = {
  img: string[];
  name: string;
  link: string;
  description: string;
  stack: string[];
  demo?: string;
};
export const ProjectCard = ({
  img,
  name,
  link,
  description,
  stack,
  demo,
}: Props) => {
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
          src={img[0]}
          alt="project-image"
          className="w-[360px] h-[202.5px] object-cover mb-2"
        />
      </div>
      <div className="projects__header">
        <h3 className="subtitle--text mb-2 h-[50px]">{name}</h3>
        <div className="flex justify-between items-center">
          <a href={link} target="_blank">
            &rarr; GitHub
          </a>
        </div>
      </div>
      <p className="h-[100px]">{description}</p>
      <div className="flex justify-between items-center">
        <button className="button--general" onClick={openModal}>
          Read More
        </button>
        {demo ? (
          <a className="flex gap-2 items-center" href={demo} target="_blank">
            <img className="w-6 h-6" src="/icons/demo.png" alt="Link" />
            <p>Demo</p>
          </a>
        ) : null}
      </div>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        children={[img, name, link, description, stack, demo]}
      ></ModalWindow>
    </li>
  );
};
