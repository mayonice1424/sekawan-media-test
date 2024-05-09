// AddIconButton.tsx
import React from "react";
import { BsPlusLg } from "react-icons/bs";

interface AddIconButtonProps {
  onClick: () => void; // Adding the onClick prop here
  className?: string;
}

const AddIconButton: React.FC<AddIconButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      role="button"
      onClick={onClick}
      className={`rounded-full bg-blue-500 h-max p-2 hover:bg-blue-700 transition-all ${className}`}
      title="Add"
    >
      <BsPlusLg className="text-white" size={32} />
    </button>
  );
};

export default AddIconButton;
