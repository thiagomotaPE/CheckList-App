import { Container, TaskModalContainer, Title, DescriptionTaskModal, Checkbox, ButtonsArea, Button } from "./styles"
import { useModalOpen } from "../../hooks/useModalOpen";


export function TaskModal(){
    const { handleOpenModal, isModalOpen } = useModalOpen()

    return(
        <>
        {!isModalOpen && (
        <Container>
            <TaskModalContainer>
                <Title>Tarefa 1</Title>
                <DescriptionTaskModal placeholder="Task Description" />
                <Checkbox>
                    <label>
                        <input type="radio" name="Check" checked/>
                        <span>Concluido</span>
                    </label>
                    <label>
                        <input type="radio" name="Check"/>
                        <span>Não Concluido</span>
                    </label>
                </Checkbox>
                <ButtonsArea>
                    <Button onClick={handleOpenModal}>Back</Button>
                    <Button>Update</Button>
                </ButtonsArea>
            </TaskModalContainer>
        </Container>
        )}
        </>
    )
}