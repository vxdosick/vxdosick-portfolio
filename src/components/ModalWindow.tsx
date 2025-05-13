type Props = {
  children: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="modal__overlay w-full h-full fixed top-0 left-0 bg-gray-700 flex items-center justify-center z-[1000]">
      <div className="modal__content p-[25px] relative">
        <button className="modal__close absolute top-[10px] right-[10px] font-bold" onClick={onClose}>
          &#10005;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
