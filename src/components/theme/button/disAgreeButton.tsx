// DisAgreeButton.tsx
import React from "react";

interface DisAgreeButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Add className prop
}

const DisAgreeButton: React.FC<DisAgreeButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full transition-all ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DisAgreeButton;
