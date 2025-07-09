import { useEffect, useState } from "react";

export function ProgressBar() {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const timout = setTimeout(() => {
      setFilled(true);
    }, 100);

    return () => clearTimeout(timout);
  });


  return (
    <div className="w-full bg-gray-500  h-6  m-2">
      <div
        className={`h-full bg-green-400 transition-all duration-[2000ms] ${
          filled ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
}
