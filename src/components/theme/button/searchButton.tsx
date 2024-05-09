// SearchButton.tsx
import React from "react";

interface SearchButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Adding the onClick prop here
}

const SearchButton: React.FC<SearchButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SearchButton;
