// AgreeButton.tsx
import React from "react";

interface AgreeButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Add className prop
}

const AgreeButton: React.FC<AgreeButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full transition-all ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AgreeButton;
