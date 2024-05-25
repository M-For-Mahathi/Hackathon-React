import React, { useEffect, useState } from 'react'
import "./AddTask.css"

function AddTask(props) {
    const [newtask, setnewtask] = useState('')
    const [taskList, settaskList] = useState([])
    const handleInputchange =(event) =>{
        setnewtask(event.target.value)
    }
    const handleNewtask = () => {
      if(newtask){      
        settaskList((prev) => [...prev, newtask])
        props.setTaskList((prev) => [...prev, newtask])
        setnewtask('')
      }
    }
    useEffect(()=>{
        console.log(taskList)
    },[taskList])
  return (
    <>
    <div className='inputDiv'>  
    <input type='text' onChange={handleInputchange} value={newtask} placeholder='Enter the Task'></input>
    <button onClick={handleNewtask}>Submit</button>
    </div>  
    </>
  )
}
export default AddTask