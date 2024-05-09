// TrashIconButton.tsx
import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

interface TrashIconButtonProps {
  onClick: () => void; // Adding the onClick prop here
  className?: string;
}

const TrashIconButton: React.FC<TrashIconButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button type="button" role="button" onClick={onClick}>
      <BsFillTrash3Fill
        className={`transition-all text-blue-500 hover:text-blue-700 ${className}`}
        size={28}
      />
    </button>
  );
};

export default TrashIconButton;
