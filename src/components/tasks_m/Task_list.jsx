

function Task_list(props) {
  return (
    <div>
        <h3>Task List</h3>
        {
            props.tasks.map(t=><h5 key={t} className="fw-normal">{t}</h5>)
        }
    </div>
  )
}

export default Task_list
