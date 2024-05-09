// ReadIconButton.tsx
import React from "react";
import { BsEye } from "react-icons/bs";

interface ReadIconButtonProps {
  onClick: () => void; // Reading the onClick prop here
  className?: string;
}

const ReadIconButton: React.FC<ReadIconButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      role="button"
      onClick={onClick}
      className={`transition-all rounded-full bg-blue-500 h-max p-2 hover:bg-blue-700 ${className}`}
      title="Read"
    >
      <BsEye className="text-white" size={32} />
    </button>
  );
};

export default ReadIconButton;
