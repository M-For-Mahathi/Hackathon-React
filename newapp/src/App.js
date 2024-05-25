import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './component/addTask/AddTask';
import ViewTask from './component/viewTask/ViewTask';

function App() {

  const [taskList,setTaskList] = useState([])

  const handelDeleteList=(task)=>{
    const newData = taskList.filter(i=>i!==task)
    setTaskList(newData)
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((data)=>{console.log(data)})
  },[])
  return (
    <>
    <AddTask setTaskList={setTaskList} />
    {taskList.length > 0 && taskList.map((task,index)=>{
      return(
        <ViewTask task={task} index={index}  deleteList={handelDeleteList}/>
      )
    })}
    
    </> 
  );
}

export default App;
