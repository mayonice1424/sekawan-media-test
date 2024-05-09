// EditIconButton.tsx
import React from "react";
import { BsFillPencilFill } from "react-icons/bs";

interface EditIconButtonProps {
  onClick: () => void; // Adding the onClick prop here
  className?: string;
}

const EditIconButton: React.FC<EditIconButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button type="button" role="button" onClick={onClick}>
      <BsFillPencilFill
        className={`text-blue-500 hover:text-blue-700 transition-all ${className}`}
        size={28}
      />
    </button>
  );
};

export default EditIconButton;
