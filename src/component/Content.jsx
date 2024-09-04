import React from "react";
import useStore from "../useStore/save-store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { useState } from "react";

const Content = () => {
    const [input, setInput] = useState('')
    const { arr, addArr, deleteArr } =useStore((state)=>({
        arr: state.arr,
        addArr: state.addArr,
        deleteArr: state.deleteArr,
    }))

    const hdlChange = e =>{
        setInput(e.target.value)
    }

    const hdlAddTask = () =>{
        addArr(input)
        toast.success(`Create "${input}"`)
    }
    
    const hdlDelete =(id) =>{
        deleteArr(id)
        toast.error(`Delete "${input}"`)
    }
    
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center m-4">To-do List</h1>
      <div className="flex flex-col gap-4 my-4">
        <input className="border p-2 rounded" type="text" placeholder="Add task" onChange={hdlChange} />
        <button onClick={hdlAddTask} className="bg-blue-500 text-white p-2 rounded">Add</button>
      </div>
      {arr.map((item)=>(
        <li key={item.id} className="list-none p-3 bg-blue-300 text-white font-semibold flex justify-between items-center rounded-xl my-4 shadow-sm">{item.title}  <button onClick={()=>hdlDelete(item.id)} className="text-white font-semibold p-2 bg-red-400 rounded-lg shadow-md">Delete</button></li>
      ))}
    {/* <ToastContainer /> */}
    </div>
  );
};

export default Content;
