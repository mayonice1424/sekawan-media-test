"use client";

import React from "react";

interface AddFormButtonProps {
  text: string;
  className?: string;
}

const AddFormButton: React.FC<AddFormButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all ${className}`}
      type="submit"
    >
      {text}
    </button>
  );
};

export default AddFormButton;
