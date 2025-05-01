import  { useEffect, useState } from "react";

export const InfiniteScroll = () => {
  const [allItems, setAllItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    setAllItems(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setVisibleCount((prev) => prev + 10);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const visibleElements = allItems.slice(0, visibleCount);

  return (
    <div className="flex  flex-col   p-2 mt-10">
      {visibleElements.map((item) => (
        <div
          key={item?.key}
          className="m-1 p-2 border-2 border-black rounded-2xl"
        >
          <h1 className="text-2xl font-bold">{item?.title}</h1>
          <p className="text-lg">{item?.body}</p>
        </div>
      ))}

      {visibleCount >= allItems.length && (
        <h1 className="font-bold">All Items Loaded</h1>
      )}
    </div>
  );
};


/*window.innerHeight:

Represents the height of the visible part of the browser's viewport (in pixels).

For example, if your browser window is 800 pixels tall, window.innerHeight is 800.

document.documentElement.scrollTop:

Tracks the number of pixels the user has scrolled from the top of the document.

If the user scrolls down 500 pixels, document.documentElement.scrollTop will be 500.

document.documentElement.offsetHeight:

The total height of the document, including the content that is not visible in the viewport.

For example, if the content of the page is 2000 pixels tall, offsetHeight will be 2000.
*/