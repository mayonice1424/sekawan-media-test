import React from "react";

interface YearButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean; 
  className?: string;
}

const YearButton: React.FC<YearButtonProps> = ({
  text,
  onClick,
  active,
  className,
}) => {
  const buttonClass = `transition-all bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full active:bg-emerald-500 ${className}`;

  return (
    <button
      className={buttonClass}
      type="button"
      role="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default YearButton;
