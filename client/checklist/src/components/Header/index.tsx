import { 
    Container,
    LogoArea, 
    Logo, 
    NavigateArea, 
    SearchArea,
    NewTaskArea, 
    Button,
    AccountArea,
    Perfil
} from "./styles"
import { NewTaskModal } from "../NewTaskModal";
import { useModalOpen } from "../../hooks/useModalOpen";
import { Link } from 'react-router-dom';

export function Header(){
    const { handleOpenModal, isModalOpen } = useModalOpen()
    
    return(
        <>
            <Container>
                <LogoArea>
                    <Logo>CHECKLIST</Logo>
                </LogoArea>
                <NavigateArea>
                    <SearchArea type="text" placeholder="Digite o nome ou descrição da tarefa para encontra-la"/>
                </NavigateArea>
                <NewTaskArea>
                    <Button onClick={handleOpenModal}>New Task</Button>
                    <AccountArea>
                        <Perfil>
                            <li>Nome: Thiago Mota</li>
                            <li>Total tarefas: 4</li>
                            <li>Concluidas: 3</li>
                            <li>A concluir: 1</li>
                            <li><Link to="/">Sair</Link></li>
                        </Perfil>
                    </AccountArea>
                </NewTaskArea>
                
            </Container>
            {isModalOpen ? <NewTaskModal/> : null}
        </>
    )
}
