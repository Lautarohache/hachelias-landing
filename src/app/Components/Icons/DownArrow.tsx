import React from "react";

interface DownArrowProps {
  width: string;
  height:string;
  viewBox: string; // Prop 'viewBox' de tipo string
}
const DownArrow: React.FC<DownArrowProps> = ({width,height,viewBox}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="58" cy="58" r="58" fill="#F49920" />
      <circle cx="58" cy="58" r="39" fill="black" />
      <path
        d="M58 74.1875C57.6675 74.1875 57.335 74.065 57.0725 73.8025L46.45 63.18C45.9425 62.6725 45.9425 61.8325 46.45 61.325C46.9575 60.8175 47.7975 60.8175 48.305 61.325L58 71.02L67.695 61.325C68.2025 60.8175 69.0425 60.8175 69.55 61.325C70.0575 61.8325 70.0575 62.6725 69.55 63.18L58.9275 73.8025C58.665 74.065 58.3325 74.1875 58 74.1875Z"
        fill="#F49920"
      />
      <path
        d="M58 73.89C57.2825 73.89 56.6875 73.295 56.6875 72.5775V43.125C56.6875 42.4075 57.2825 41.8125 58 41.8125C58.7175 41.8125 59.3125 42.4075 59.3125 43.125V72.5775C59.3125 73.295 58.7175 73.89 58 73.89Z"
        fill="#F49920"
      />
    </svg>
  );
};

export default DownArrow;
