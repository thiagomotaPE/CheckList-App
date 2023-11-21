import { Container, NewTaskContainer, Title, TitleNewTask, DescriptionNewTask, ButtonsArea, Button } from "./styles"
import { useModalOpen } from "../../hooks/useModalOpen";


export function NewTaskModal(){
    const { handleOpenModal, isModalOpen } = useModalOpen()

    return(
        <>
        {!isModalOpen && (
        <Container>
            <NewTaskContainer>
                <Title>New Task</Title>
                <TitleNewTask placeholder="Task Name" />
                <DescriptionNewTask placeholder="Task Description" />
                <ButtonsArea>
                    <Button onClick={handleOpenModal}>Back</Button>
                    <Button>Submit</Button>
                </ButtonsArea>
            </NewTaskContainer>
        </Container>
        )}
        </>
    )
}