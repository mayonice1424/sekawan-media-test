// ApproveButton.tsx
import React from "react";

interface ApproveButtonProps {
  onClick: () => void;
  className?: string; // Add className prop
}

const ApproveButton: React.FC<ApproveButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-10 rounded-full transition-all ${className}`}
      type="button"
      onClick={onClick}
    >
      Approve
    </button>
  );
};

export default ApproveButton;
