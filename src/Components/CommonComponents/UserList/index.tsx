import { useEffect, useRef, useState } from "react";
import { UserCard } from "./Card";

export const UserList = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  let debounceId = useRef(null);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataJson = await data.json();
    setList(dataJson);
    setOriginalList(dataJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  const handleChange = (e) => {
    console.log("====== in the handler",e.target.value);
    const value=e.target.value
    
    setSearch(e.target.value);
    setLoading(true);
    if (debounceId?.current) {
      clearTimeout(debounceId);
    }

    console.log("===",search);
    
    if(value?.trim()===""){
        setList(originalList)
    }else{
    debounceId = setTimeout(() => {
      const list = originalList?.filter((item) =>
        item?.username?.toLowerCase().includes(search.toLocaleLowerCase())
      );

      setList(list);
    }, 500);
}

    setLoading(false);
  };

  const handleScroll=()=>{
    if(window.innerHeight+ document.documentElement.scrollTop>= document.documentElement?.offsetHeight-10){
        setVisibleCount((prevState)=>prevState+3)
    }
  }

  const paginatedData= list?.slice(0,visibleCount);

  return (
    <div className="felx flex-col m-7">
      <input
        type="text"
        className="px-5 py-6 border-2 "
        onChange={(e) => handleChange(e)}
      />

      {loading ? (
        <p>Loading.......</p>
      ) : (
        <>
          {paginatedData?.map((item) => (
            <UserCard key={item?.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
};
