import { useEffect, useState } from "react";
import { ProgressBar } from ".";

export const ProgressBarComponent = () => {
  const [bars, setBars] = useState([]);

  // const handleClick = () => {
  //   const barId = Date.now();
  //   setBars((prevState) => [...prevState, barId]);
  // };

  useEffect(()=>{
   const timeId= setTimeout(()=>{
        const barId = Date.now();
        setBars((prevState) => [...prevState, barId]);
    },5000)


    return ()=>clearTimeout(timeId)
  })

  console.log("=====",bars);
  
  return (
    <>
      {/* <button
        //onClick={handleClick}
        className="px-6 py-2 bg-black text-white border-2 border-black"
      >
        Add Bars
      </button> */}
      {bars?.map((id) => (
        <>
          <ProgressBar key={id} />
        </>
      ))}
    </>
  );
};
