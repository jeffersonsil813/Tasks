import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    // useParams -> hook (basicamente é uma função que me retorna algo)
    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return (
        <>
            <div onClick={handleBackButtonClick} className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus esse atque velit corrupti! Provident.</p>
            </div>
        </>
    )
}

export default TaskDetails