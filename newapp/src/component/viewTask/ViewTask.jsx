import React from 'react'
import "./ViewTask.css"

function ViewTask(props) {

    const handelDelete=()=>{
        props.deleteList(props.task)
    }
  return (
    <>
    <div className='viewDiv'>
        <h4>{props.task}</h4>
        <button onClick={handelDelete}>Delete</button>
    </div>
    </>
  )
}

export default ViewTask