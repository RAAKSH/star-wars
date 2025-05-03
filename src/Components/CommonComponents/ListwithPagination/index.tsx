import  { useState, useEffect } from "react";
import { Pagination } from "../PaginationComponent/index";

export const UserData = () => {
  const [apiData, setApiData] = useState([]);
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    setApiData(jsonData);
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  const paginatedData = apiData.slice(
    current * itemsPerPage,
    (current + 1) * itemsPerPage
  );


  return (
    <>
      {paginatedData?.map((item) => (
        <div
          key={item?.id}
          style={{
            border: "5px solid rgb(0,0,0)",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "block",
            width: "700px",
            height: "100px",
            overflow: "hidden",
          }}
        >
          <h1>{item?.title}</h1>
          <p>{item?.body}</p>
        </div>
      ))}

      <Pagination
        totalPages={Math.ceil(apiData.length / itemsPerPage)}
        currentPage={current}
        setCurrentPage={setCurrent}
      />
    </>
  );
};
