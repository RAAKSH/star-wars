import React, { useEffect, useState } from "react";

export const UserList = () => {
  const [searchText, setSearchText] = useState("");

  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/users");
      const jsonData = await data.json();
      setList(jsonData?.users);
      setOriginalList(jsonData?.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e) => {
    const text = e.target.value;

    const filteredData = originalList.filter((item) =>
      item?.firstName?.toLowerCase().includes(text.toLowerCase())
    );

    console.log("abc", filteredData);
    setList(filteredData);
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        type={"text"}
        value={searchText}
        onChange={(e) => handleChange(e)}
        className="border-black border-2"
      />

      {list &&
        list?.map((item) => (
          <div style={{ display: "flex" }}>
            {item.firstName + " " + item?.lastName}
          </div>
        ))}
    </>
  );
};
