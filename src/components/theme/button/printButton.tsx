"use client";

import React from "react";
import { BsPrinter } from "react-icons/bs";

interface PrintButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      className={`${className} transition-all bg-emerald-500 font-button hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 items-center`}
      type="button"
      onClick={onClick}
    >
      <BsPrinter /> {text}
    </button>
  );
};

export default PrintButton;
