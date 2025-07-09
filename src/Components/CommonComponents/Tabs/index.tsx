import { useState } from "react";

const TabInfo = [
  {
    id: 1,
    name: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 2,
    name: "JAVASCRIPT",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
  {
    id: 3,
    name: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-4">
      <div className="flex gap-x-5 m-2">
        {TabInfo?.map((item) => (
          <button
            key={item?.id}
            onClick={() => setActiveTab(item?.id)}
            className={`px-6 py-2 border-1 text-black ${activeTab===item?.id ? "bg-pink-500":" bg-gray-50"}`}
          >
            {item?.name}{" "}
          </button>
        ))}
        </div>

        <div className=" text-black">
          {TabInfo?.map(
            (item) =>{
             return( item?.id === activeTab && (
                <div key={item?.id} className="text-blue">{item?.content}</div>
              ))
            }
          )}
        </div>
     
    </div>
  );
};
