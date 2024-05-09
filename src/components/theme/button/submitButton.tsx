"use client";

import React from "react";

interface SubmitButtonProps {
  text: string;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors ${className}`}
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
