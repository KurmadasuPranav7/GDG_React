import Tasks_count from "./Tasks_count"
import Add_task from "./Add_task"
import Task_list from "./Task_list"
import { useState } from "react"

function Manage_tasks() {

  let [tasks,setTasks] = useState([]);

  function addNewTask(){
    let newNumber = Math.random();
    setTasks([...tasks,newNumber]);
  }

  console.log(tasks);
  return (
    <div className="container text-center">
        <h1>Manage Your Tasks</h1>
		<div className="d-flex justify-content-around mt-5">
			<Add_task addNewTask = {addNewTask}/>
			<Task_list tasks = {tasks}/>
			<Tasks_count tasks = {tasks}/>
		</div>
    </div>
  )
}

export default Manage_tasks
