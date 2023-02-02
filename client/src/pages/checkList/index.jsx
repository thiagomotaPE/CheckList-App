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
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/get').then((response => {
      setTaskList(response.data)
    }))
  }, [])

  const submitTask = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name_task:name_task, 
      description_task: description_task,
    }).then(() => {
      alert("sucess insert")
    })
  }

  const [taskPopupOpen, setTaskPopupOpen] = useState(false);
  return (<>
    <Header />

    <LinkContainer>
      <Link to= "/"> Sair da conta</Link>
    </LinkContainer>

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
            <input type="text" id='description' onChange={(e) => {
                setDescription_task(e.target.value)
            }}/>
        </label>
        <ButtonContainer>
            <Button variant="primary" title="ADD" onClick={submitTask}/>
        </ButtonContainer>
      </Form>
    </Container>


    {taskList.map((val) => {
        return<>
        <TaskContainer>
            <CheckBox type="checkbox"></CheckBox>
            <Description>
                <h3>{val.name_task}</h3> <p>{val.description_task}</p>
                
                <p>22:07, 31/01/2023</p>
            </Description>
            <div>
              <Actions>
                  <span class="material-symbols-outlined">
                      delete
                  </span>
              </Actions>
              <Actions>
                  <span class="material-symbols-outlined">
                      edit
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
