import React from "react"
import Task from './Task';

// Props é um objeto com os valores passados
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />)}
        </>
    )
}

export default Tasks