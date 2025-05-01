import  { useState } from "react";

export const TodoNotes = () => {
  const [addTodo, setAddTodo] = useState({ id: null, text: "" });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setAddTodo((prevState) => ({ ...prevState, text: e.target.value }));
  };

  const handleAdd = () => {
    if (addTodo?.text?.trim() === "") return;

    if (addTodo?.id) {
      setList((prevState) =>
        prevState?.map((item) =>
          item?.id === addTodo?.id ? { ...item, text: addTodo?.text } : item
        )
      );
    } else {
      setList((prevState) => [
        ...prevState,
        { id: list?.length + 1, text: addTodo?.text },
      ]);
    }
    setAddTodo({ id: null, text: "" });
  };

  const handleDelete = (item) => {
    const filteredData = list?.filter((i) => i?.id !== item?.id);
    setList(filteredData);
  };

  const handleUpdate = (item) => {
    setAddTodo(item);
  };

  return (
    <div className="p-2 mt-10">
      <div className="flex">
        <input
          className="p-2 m-1 px-4 py-3 border border-gray-300 rounded "
          style={{
            border: "1px solid black",
            borderRadius: "4px",
            borderColor: "black",
            color: "red",
          }}
          onChange={(e) => handleChange(e)}
          value={addTodo.text}
        />

        <button
          className=" p-2 px-4 py-3 bg-blue-400 rounded-xl"
          onClick={handleAdd}
        >
          {addTodo?.id ? "Update" : "Add"}
        </button>
      </div>
      <div>
        {list?.map((item) => (
          <div key={item?.id} className="flex p-1 justify-between">
            <h1 className="p-1">{item?.id}</h1>
            <h1 className="p-1"> {item?.text}</h1>
            <button
              className="pt-1 px-2 py-1 bg-gray-400 rounded-xl"
              onClick={() => handleDelete(item)}
            >
              Delete
            </button>
            <button
              className="pt-1  px-2 py-1 bg-gray-400 rounded-xl"
              onClick={() => handleUpdate(item)}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/*import React, { useRef, useEffect, useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState({
    id: null,
    text: "",
    completed: false,
  });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo((prevState) => ({ ...prevState, text: value, completed: false }));
  };

  const handleAddOrUpdate = () => {
    if (todo?.text?.trim() === "") return;
    if (todo?.id) {
      setList((prevState) =>
        prevState?.map((item) =>
          item?.id === todo?.id ? { ...item, text: todo?.text } : item
        )
      );
    } else {
      setList((prevState) => [
        ...prevState,
        { id: list.length + 1, text: todo?.text, completed: false },
      ]);

      setTodo({ id: null, text: "" });
    }
  };

  const handleUpdate = (item) => {
    setTodo(item);
  };

  const handleDelete = (item) => {
    console.log("===", item);
    const newList = list.filter((i) => i.id !== item?.id);

    setList(newList);
  };

  const handlechange = (item) => {
    setList((prevState) =>
      prevState?.map((item) =>
        item?.id === todo?.id ? { ...item, completed: !item?.completed } : item
      )
    );
  };
  return (
    <>
      <input value={todo.text} onChange={(e) => handleChange(e)} />
      <button onClick={handleAddOrUpdate}>{todo?.id ? "Update" : "Add"}</button>

      <table border={"1 px solid"}>
        <tr>
          <th> done</th>
          <th> Id</th>
          <th> text</th>
          <th>Completed</th>
        </tr>

        <tbody>
          {list?.map((item) => {
            return (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    value={item?.completed}
                    onChange={() => handlechange(item)}
                  />
                </td>
                <td>{item?.id}</td>
                <td>{item?.text}</td>
                <td>{item?.completed ? "true" : "false"}</td>
                <td>
                  <button onClick={() => handleUpdate(item)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
*/
