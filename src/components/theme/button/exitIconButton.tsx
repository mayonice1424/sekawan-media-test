// ExitIconButton.tsx
import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

interface ExitIconButtonProps {
  onClick: () => void; // Adding the onClick prop here
  className?: string;
}

const ExitIconButton: React.FC<ExitIconButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      role="button"
      onClick={onClick}
      className={`${className} transition-all`}
    >
      <BsFillXCircleFill className="text-red-500" size={32} />
    </button>
  );
};

export default ExitIconButton;
