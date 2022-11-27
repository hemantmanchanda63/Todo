import React from 'react'
import './style.css'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}
const Taskify = ({todo,setTodo,handleAdd }:Props) => {  

  return (
    <>
     <h1 className='heading'>Taskify</h1> 
     <form className='input' onSubmit={handleAdd}  >
        <input type="input" className='input_box' id='hell' placeholder='Enter a Task' value={todo} onChange={(e)=>{
          setTodo(e.target.value)
        }} />
        <button className='input_submit' type='submit'>Go</button>


     </form>
    </>
  )
}

export default Taskify
