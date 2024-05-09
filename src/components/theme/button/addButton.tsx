// AddButton.tsx
import React from "react";
import { BsPlusLg } from "react-icons/bs";

interface AddButtonProps {
  text: string;
  onClick: () => void; // Adding the onClick prop here
  className?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
    className={`bg-transparent font-button  outline-2 transition-colors outline-none outline-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-medium rounded flex items-center gap-1 ${className}`}
    type="button"
    onClick={onClick}
    >
      <BsPlusLg /> {text}
    </button>
  );
};

export default AddButton;
