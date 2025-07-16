import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
const API_KEY = "5pz3ijoel9TP8PVJPb0SDND5kdXihPyc";

export const Giphy = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const debounceId = useRef(null);
  const [loading, setloading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const fetchData = async (search: string) => {
    const data = await fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${encodeURIComponent(
        search
      )}&offset=${100}`
    );
    const dataJson = await data?.json();

    setList(dataJson?.data);
    setloading(false);
  };

  useEffect(() => {
    fetchData(search);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });


  const handleClick = () => {
    setloading(true);
    

    fetchData(search);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement?.scrollTop >=
      document?.documentElement?.offsetHeight - 10
    ) {
      setVisibleCount((prevState) => prevState + 10);
    }
  };



  const paginatedData=list?.slice(0,visibleCount);

  console.log("===",paginatedData);
  

  return (
    <div className="text-black">
      <input
        type="text"
        name={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-black border-2 px-6 py-1 m-3"
      />
      <button
        type="submit"
        onClick={handleClick}
        className="px-6 py-3 border-1 border-amber-300"
      >
        Search
      </button>

      {/* {list?.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {list?.map((item) => (
            <Card key={item?.id} data={item} />
          ))}
        </div>
      ) : (
        <p>No data</p>
      )} */}

      {loading ? (
        <p>Loading......</p>
      ) : (
        <>
          {paginatedData?.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {paginatedData?.map((item) => (
                <Card key={item?.id} data={item} />
              ))}
            </div>
          ) : (
            <p>No data found</p>
          )}
        </>
      )}
    </div>
  );
};
