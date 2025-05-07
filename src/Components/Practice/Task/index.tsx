import React, { useState } from "react";

export const Task = () => {
  const [addTask, setAddTask] = useState({
    id: null,
    taskName: "",
    status: "Start Task",
  });
  const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    const data = e.target.value;

    setAddTask((prevState) => ({
      ...prevState,
      id: list.length + 1,
      taskName: data,
    }));
  };

  const handleClick = () => {
    setList((prevState)=>[...prevState,addTask]);
  };

  const handleDelete = (item) => {

    const filteredArray= list?.filter((i)=>i?.id!==item?.id)
    setList(filteredArray);
  };

  console.log("===", list);
  const handleTimer=(item)=>{

    setList((prevState)=>prevState.map((i)=>i?.id===item?.id? {...i,status: <><input type="checkbox" checked disabled={true}/>{"Completed"}</>}:i))

  }

  return (
    <div>
      <div className="flex">
        <input
          className="border-1 border-black m-3"
          value={addTask.taskName}
          name={"name"}
          onChange={(e) => handleOnChange(e)}
        />
        <button className="border-1 px-3 py-4 bg-red-400" onClick={handleClick}>
          Add{" "}
        </button>
      </div>

      <table border={2} className="border-2 p-2 m-3">
        <thead>
        <th>Task Name</th>
        <th>Status</th>
        <th>Delete</th>
       </thead>

        <tbody>
          {list && list?.map((item) => (
            <tr>
              <td>{item?.taskName}</td>
              <td>{item?.status=="Start Task" ?<button onClick={()=>handleTimer(item)}className="border-1 px-2 py-3 m-3">{item?.status}</button>:item.status }</td>
              <td>
                <button onClick={() => handleDelete(item)} className="border-1 px-2 py-3 m-3"> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
