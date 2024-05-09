// RejectButton.tsx
import React from "react";

interface RejectButtonProps {
  onClick: () => void;
  className?: string; // Add className prop
}

const RejectButton: React.FC<RejectButtonProps> = ({ onClick, className }) => {
  return (
    <button
      className={`transition-all bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full ${className}`}
      type="button"
      onClick={onClick}
    >
      Reject
    </button>
  );
};

export default RejectButton;
