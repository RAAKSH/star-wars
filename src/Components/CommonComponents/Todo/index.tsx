import { useState } from "react";


export const TodoNotes = () => {
 const [addTodo, setAddTodo] = useState({ id: null, text: "" });
 const [list, setList] = useState([]);


 const handleChange = (e) => {
   
   setAddTodo((prevState)=>({...prevState,text:e.target.value}));
 };


 const handleAdd = () => {
   if (addTodo?.text?.trim() === "") return;


   if (addTodo?.id) {
     setList((prevState) =>
       prevState?.map((item) =>
         item?.id === addTodo?.id ? {...item, text: addTodo?.text } : item
       )
     );
   } else {
     setList((prevState) => [...prevState, {id:list?.length+1,text:addTodo?.text}]);
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


 console.log("lis",list)


 return (
   <div className="p-2 mt-3">
     <div className="flex">
       <input
         className="p-2 m-1 px-4 py-3 border border-gray-300 rounded "
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



