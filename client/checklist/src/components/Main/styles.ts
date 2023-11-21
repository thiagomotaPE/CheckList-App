import styled from 'styled-components'

export const Container = styled.main`
    background-color: var(--backgroundColor);

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const TasksContainer = styled.div`
    background-color: var(--backgroundColor2);

    max-width: 90%;
    min-width: 90%;
    max-height: 85%;
    min-height: 85%;
    padding: 20px;

    overflow-y: auto;

    border-radius: 5px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;

    //Tela para notbook
    @media (max-width: 1625px) {
        grid-template-columns: 1fr 1fr 1fr;

    }

    //tela tablet
    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    //tela smartphone
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`