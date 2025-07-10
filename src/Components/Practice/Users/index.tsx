import { useEffect, useRef, useState } from "react";

export const UserList = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const debounceTimer=useRef(null)

  const fetchData = async (search: string) => {
    if (search?.length > 0) {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users?username`
      );
      const datajson = await data.json();
      setList(datajson);
      setSearch("");
    } else {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const datajson = await data.json();
      setList(datajson);
      setSearch("");
      setOriginalList(datajson);
    }
  };

  useEffect(() => {
    fetchData(search);
  }, []);



  const handleChange = (e) => {
    const changedValue = e.target.value;

    console.log("======", changedValue);

    setSearch(changedValue);

    
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    } 
      console.log("asdasdasd", search);
      debounceTimer.current = setTimeout(() => {
        if (changedValue.trim() === "") {
            setList(originalList);
         
        } else {
            console.log("sasdasd", changedValue.trim());

            const filteredList = originalList?.filter((item) =>
              item?.username.toLowerCase().includes(changedValue?.trim().toLowerCase())
            );
  
            setList(filteredList);
         
        }
      }, 3000);
    

    //debounce(fetchData, 3000);
  };

  return (
    <div className="flex flex-col w-20%">
      <input
        type="text"
        name={search}
        onChange={(e) => handleChange(e)}
        className="px-5 py-6 border-2 border-black m-5"
      />

      <table border={1} className="border-1 black">
        <thead>
          <tr>
            <th>{"Name"}</th>
            <th>{"email"}</th>
            <th>{"comapny"}</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.username}</td>
              <td>{item?.email}</td>
              <td>{item?.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
