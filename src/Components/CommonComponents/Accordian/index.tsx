import { useState } from "react";

export const Accordian = () => {
  const [activeId, setActiveId] = useState(null);
  const accordionData = [
    {
      id: 1,
      title: "What is JavaScript?",
      content:
        "JavaScript is a versatile programming language used mainly for web development to create interactive elements on websites.",
    },
    {
      id: 2,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, particularly single-page applications, developed by Facebook.",
    },
    {
      id: 3,
      title: "What is an Accordion component?",
      content:
        "An Accordion is a UI element that lets users expand and collapse sections of related content.",
    },
    {
      id: 4,
      title: "Why use components in UI design?",
      content:
        "Components make UI development more modular, reusable, and easier to maintain by encapsulating behavior and appearance.",
    },
  ];
  return (
    <div className="flex flex-col">
      {accordionData.map((item) => (
        <div key={item.key} className="w-100 border-1 border-black m-2 p-5">
          <h1 className="font-bold text-2xl" onClick={() => setActiveId(item?.id===activeId?null:item?.id)}>
            {item?.title}
          </h1>
          {activeId ===item?.id && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};
