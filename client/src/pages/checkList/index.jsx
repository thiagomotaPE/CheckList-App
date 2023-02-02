import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button'
import Axios from 'axios'
import { 
  LinkContainer,
  Container,
  Form,
  FormTitle,
  ButtonContainer,
  TaskContainer, 
  CheckBox, 
  Description, 
  Actions
 } from './styles'
import axios from 'axios';


const CheckList = () => {

  const [name_task, setName_task] = useState('')
  const [description_task, setDescription_task] = useState('')
  const [date_init, setDate_init] = useState('')
  const [date_end, setDate_end] = useState('')

  const [newDescription, setNewDescription] = useState('')
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/get').then((response => {
      setTaskList(response.data)
    }))
  }, [])

  const submitTask = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name_task:name_task, 
      description_task:description_task,
      date_init:date_init,
      date_end:date_end,
    })

    setTaskList([
      ...taskList, {name_task:name_task, description_task:description_task, date_init:date_init, date_end:date_end}
    ])
  }

  const deletTask = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`)
  }

  const updateDescriptionTask = (id) => {
    Axios.put("http://localhost:3001/api/update", {
      description_task:newDescription,
      id_task:id,
    })
    setNewDescription("")
  }

  return (<>
    <Header />

    <LinkContainer>
      <Link to= "/"> Sair da conta</Link>
    </LinkContainer>

    {/* adicionar uma nova tarefa */}
    <Container>
      <Form>
        <FormTitle>ADD Task</FormTitle>
        <label htmlFor='title'>
            Title
            <input type="text" onChange={(e) => {
                setName_task(e.target.value)
            }}/>
        </label>
        <label htmlFor='title'>
            Description
            <input type="text" onChange={(e) => {
                setDescription_task(e.target.value)
            }}/>
        </label>
        <label htmlFor='title'>
            Initial Data
            <input type="date" onChange={(e) => {
                setDate_init(e.target.value)
            }} className="dateTask"/>
        </label>
        <label htmlFor='title'>
            End Data
            <input type="date" onChange={(e) => {
                setDate_end(e.target.value)
            }} className="dateTask"/>
        </label>
        <ButtonContainer>
            <Button variant="primary" title="ADD" onClick={submitTask}/>
        </ButtonContainer>
      </Form>
    </Container>

    {/* lista de tarefas */}
    {taskList.map((val) => {
        return<>
        <TaskContainer>
            <CheckBox type="checkbox"></CheckBox>
            <Description>
                <h3>{val.name_task}</h3> 
                <p>{val.description_task}</p>
                <p>start: {val.date_init} end: {val.date_end}</p>
                <input type="text" className='updateTask' onChange={(e) => {
                  setNewDescription(e.target.value)
                }}/>
            </Description>
            <div>
              <Actions onClick={() => {(updateDescriptionTask(val.id_task))}}>
                  <span className="material-symbols-outlined">
                      edit
                  </span>
              </Actions>
              <Actions onClick={() => {(deletTask(val.id_task))}}>
                  <span className="material-symbols-outlined">
                      delete
                  </span>
              </Actions>
            </div>
        </TaskContainer>
    </>
    })}

    <Footer />
    </>
  )
}

export { CheckList }
