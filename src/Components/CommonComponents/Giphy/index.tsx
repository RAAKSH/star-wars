import { useEffect, useState } from "react";
import { Card } from "./Card";
const API_KEY = "5pz3ijoel9TP8PVJPb0SDND5kdXihPyc";

const LIMIT = 20;

export const Giphy = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(false);
  const [offset, setOffset] = useState(0);
  //const [hasMore, setHasMore] = useState(false);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${encodeURIComponent(
        search
      )}&limit=${LIMIT}&offset=${offset}`
    );
    const dataJson = await data?.json();

    const newGif = dataJson.data || [];

    setList((prevState) => [...prevState, ...newGif]);
    //setHasMore(newGif.length == LIMIT);

    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setloading(true);

    fetchData(search);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setOffset((prevState) => prevState + LIMIT);
    }
  };

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

    
            <div className="grid grid-cols-5 gap-4">
              {list?.map((item) => (
                <Card key={item?.id} data={item} />
              ))}
            </div>
    {loading&& <p>Loading....</p>}
    {(list?.length===0  && !loading) && <p>No results</p>}
    </div>
  );
};
