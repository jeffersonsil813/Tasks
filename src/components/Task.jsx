import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg';
// Import para navegar entre as "páginas"
import {useHistory} from 'react-router-dom';

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory()

  const handleTaskDetailsClick = () => {
    // isso tudo é pra não dar problema ao acessar a "página" pela url tipo: localhost:3000/lista de compras 20/5
    // history.push(`/${task.title}`)
    history.push(`/${task.title.split("/").join("-")}`)
  }

  return (
    // style condicional
    <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>

      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button onClick={handleTaskDetailsClick} className="see-task-details-button">
          <CgInfo />
        </button>

        <button onClick={() => handleTaskDeletion(task.id)} className="remove-task-button">
          <CgClose />
        </button>
      </div>

    </div>
  )
};

export default Task;
