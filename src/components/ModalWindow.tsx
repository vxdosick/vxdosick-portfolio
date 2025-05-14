type Props = {
  children: [string, string, string, string];
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="modal__overlay px-4 w-full h-full fixed top-0 left-0 bg-gray-700 flex items-center justify-center z-[1000]">
      <div className="modal__content p-[30px] relative w-[1200px]">
        <button className="button--secondary modal__close absolute top-[10px] right-[10px] font-bold" onClick={onClose}>
          &#10005;
        </button>
        <div className="modal__body">
          <img className="rounded-[4px] mb-5 h-[450px] w-[700px] object-cover" src={children[0]} alt="" />
          <h2 className="text-2xl">{children[1]}</h2>
          <a href={children[2]}>GitHub</a>
          <p>{children[3]}</p>
        </div>
      </div>
    </div>
  );
};
