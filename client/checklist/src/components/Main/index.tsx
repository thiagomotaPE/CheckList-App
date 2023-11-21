import { useModalOpen } from "../../hooks/useModalOpen"
import { TaskCard } from "../TaskCard"
import { TaskModal } from "../TaskModal"
import { Container, TasksContainer } from "./styles"

export function Main(){
    const { handleOpenModal, isModalOpen } = useModalOpen()
    return(
        <>
        <Container>
            <TasksContainer>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
                <TaskCard onClick={handleOpenModal}/>
            </TasksContainer>
            {isModalOpen ? <TaskModal /> : null}
        </Container>
        </>
    )
}