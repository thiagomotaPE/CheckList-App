import { Container, TaskTitle, TaskDescription, TaskStatus } from "./styles"

interface TaskCardProps {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }

export function TaskCard({onClick}: TaskCardProps){
    return(
        <>
        <Container onClick={onClick}>
            <TaskTitle>tarefa 1</TaskTitle>
            <TaskDescription>descrição jweie kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkcjeir fsdhffjh fhsdfhjs fssf f s dfsdfsdfsdfs Lorem ipsum dolor sit, amet consectetur adipisi.</TaskDescription>
            <TaskStatus>concluido</TaskStatus>
        </Container>
        </>
    )
}