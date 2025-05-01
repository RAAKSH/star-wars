import { useState } from "react";

export const LikeButton = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="flex-col m-10 ">
      <h1>Like Button Implementation</h1>
      <br />
      <button
        className={`border-2 px-4 py-2 rounded-2xl ${
          hovered
            ? "border-red-600 text-red-800"
            : "border-gray-500  text-gray-500"
        } ${clicked ? "bg-red-800 text-white" : "bg-white text-gray-500"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <span className="p-1">{!clicked ? "❤️" : "🤍"}</span>Like
      </button>
    </div>
  );
};
