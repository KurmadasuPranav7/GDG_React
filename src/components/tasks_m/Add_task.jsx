import { useState } from "react"


function Add_task(props) {

  return (
    <div>
      <h3>Add Tasks</h3>
      <button className="btn btn-lg btn-primary" onClick={props.addNewTask}>Add New</button>
    </div>
  )
}

export default Add_task
