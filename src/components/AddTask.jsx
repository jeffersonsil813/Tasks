// Pra ter a sugestão do emmet mudamos o js para jsx
import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState()

    // handle = lidar, é uma convenção do react ter o handle como nome de métodos que lidam com o onchange por exemplo
    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        // limpando o input
        setInputData('')
    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask;