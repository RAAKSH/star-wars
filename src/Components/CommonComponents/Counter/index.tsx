import { useState } from "react";

export const NumberCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <>
      <button  className=" border-2  bg-blue-300 px-3 py-2"value={value} onClick={handleIncrement}>
        Increment
      </button>

      <h1> {value}</h1>
    </>
  );
};
