import { useState } from "react";
import { StarFilled } from "./StarFilled";
import { StarEmpty } from "./StarEmpty";

export const StarRating = ({ initalRating = 0, MaxStar = 5 }) => {
  const [rating, setRating] = useState(initalRating);
  const [hovered, setHovered] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleEnter = (index) => {
    setHovered(index);
  };

  const isFilled=(index)=>{
    if(hovered>0 ) return index<=hovered;

    return index<=rating;
  }

  return (
    <div className="flex space-x-1 cursor-pointer" onMouseLeave={()=>setHovered(0)}>
      {Array.from({ length: MaxStar }, (_, i) => {
        const index = i + 1;
        return (
          <div>
            <span
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleEnter(index)}
            >
              {isFilled(index)?<StarFilled />:<StarEmpty />}
            </span>
          </div>
        );
      })}
    </div>
  );
};
