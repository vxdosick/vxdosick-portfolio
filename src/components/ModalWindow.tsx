import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {
  children: [string[], string, string, string, string[], string | undefined];
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({ children, isOpen, onClose }: Props) => {
  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "white",
          marginTop: "15px",
        }}
      />
    ),
  };
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
    <div onClick={onClose} className="modal__overlay px-4 w-full h-full fixed top-0 left-0 bg-gray-700 flex items-center justify-center z-500">
      <div onClick={(e) => e.stopPropagation()} className="modal__content p-[30px] relative w-[1200px] z-1000">
        <button
          className="button--secondary modal__close absolute top-[10px] right-[10px] font-bold"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="modal__body">
          <div className="modal__hero mb-5 flex gap-8 items-start">
            <div className="modal__slidercontainer margin-auto flex justify-center items-center">
              <Slider {...settings} className="modal__slider w-[720px] mb-7">
                {children[0].map((img, index) => {
                  return (
                    <img
                      key={index}
                      src={img}
                      alt="project-image"
                      className="w-[720px] object-cover"
                    />
                  );
                })}
              </Slider>
            </div>
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
            {children[5] && (
              <a
                href={children[5]}
                target="_blank"
                className="modal__demo button--general flex items-center gap-2"
              >
                <img className="h-6 w-6 shrink-0" src="/icons/demo.png" alt="Link" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
