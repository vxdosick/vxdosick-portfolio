type Props = {
  children: [string, string, string, string, string[], string | undefined];
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  const renderImage = (item: string | undefined) => {
    if (item) {
      switch (item) {
        case "React":
          return "/tech/reactjs.svg";
        case "TypeScript":
          return "/tech/typescript.svg";
        case "Tailwind":
          return "/tech/tailwindcss.svg";
        case "Next.js":
          return "/tech/nextjs.svg";
        case "JavaScript":
          return "/tech/javascript.svg";
        case "Scss":
          return "/tech/scss.svg";
        case "TensoFlowJs":
          return "/tech/tensorflowjs.svg";
        case "Node.js":
          return "/tech/nodejs.svg";
        case "MongoDB":
          return "/tech/mongodb.svg";
        case "Express":
          return "/tech/express.svg";
        case "HTML":
          return "/tech/html.svg";
        case "CSS":
          return "/tech/css.svg";
        case "Docker":
          return "/tech/docker.svg";
        case "Git":
          return "/tech/git.svg";
        default:
          break;
      }
    }
  };

  return (
    <div className="modal__overlay px-4 w-full h-full fixed top-0 left-0 bg-gray-700 flex items-center justify-center z-[1000]">
      <div className="modal__content p-[30px] relative w-[1200px]">
        <button
          className="button--secondary modal__close absolute top-[10px] right-[10px] font-bold"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="modal__body">
          <div className="modal__hero flex gap-5 items-start">
            <img
              className="modal__image rounded-[4px] mb-5 h-[405px] w-[720px] object-cover"
              src={children[0]}
              alt="project-image"
            />
            <div className="modal__stack">
              <h2 className="title--general">Stack</h2>
              <ul className="grid grid-cols-2 gap-x-10 gap-y-5">
                {children[4].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      {item && (
                        <img
                          className="h-8 w-8"
                          src={renderImage(item)}
                          alt="stack"
                        />
                      )}
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <h2 className="text-2xl">{children[1]}</h2>
          <a href={children[2]} target="_blank">
            &rarr; GitHub
          </a>
          <div className="modal__description flex justify-between items-end gap-5">
            <p>{children[3]}</p>
            <a
              href={children[5]}
              target="_blank"
              className="modal__demo button--general flex items-center gap-2"
            >
              <img className="h-6 w-6" src="/icons/demo.png" alt="Link" />
              <p>Demo</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
