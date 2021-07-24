import React, { useState, useEffect } from "react"
import axios from 'axios';
// importando o uuid
import { v4 as uuidv4 } from 'uuid'
// usando o react-router-dom. Aqui eu chamei o BrowserRouter de Router para facilitar a chamada do componente
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./App.css"

import Header from './components/Header';
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

const App = () => {
  // useState precisa de um valor padrão, ex: useState('Testando')
  const [tasks, setTasks] = useState([])

  // Esse hook executa uma função sempre que um variável muda
  // O useEffect NÃO PODE SER ASSÍNCRONO
  useEffect(() => {
    const fetchTasks = async () => {
      // requisição http de uma api
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=5')

      setTasks(data)
    }

    fetchTasks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      } else {
        return task
      }
    })

    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    // Nova task com tudo (...tasks) que tem na task
    const newTask = [...tasks, {
      title: taskTitle,
      // usando o uuid
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTask)
  }

  const handleTaskDeletion = (taskId) => {
    // Estou pegando todas as tasks que não possuem o id da qual eu quero excluir, ou seja, eu readiciono as tasks com exceção da que quero remover.
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  return (
    // <> isso é o fragments
    <Router>
      <div className="container">
        <Header />
        {/* O exact garante que o conteúdo só será mostrado no path / */}
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
          </>
        )}
        />

        {/* component={TaskDetails} -> Só vai renderizar quando eu acessar a rota especificada. Como estamos renderizando um componente diretamente, usamos o component.
        path="/:taskTitle" -> acessando a rota pelo título da task
        */}
        <Route path="/:taskTitle" exact component={TaskDetails} />

      </div>
    </Router>
  )
}

// Obs: Em react na hora de retornar um componente, não podemos retornar vários de uma única vez, a não ser que estejam incluídos dentro de uma div por exemplo que 'cerque' todos os componentes

// Obs: npm i uuid -> uuid é uma biblioteca do node que deixa a gente gerar ids aleatórios
// Obs: npm i react-icons --save -> biblioteca de icones
// Obs: npm i react-router-dom -> é um recurso que o react usa para simular páginas, pois o react tem um único html -> single page application
// Obs: npm i axios -> para fazer requisições http
export default App
