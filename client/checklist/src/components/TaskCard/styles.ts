import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    
    max-width: 3600px;
    max-height: 300px;
    
    padding: 5%;
    
    transition-duration: 0.5s;
    &:hover{
        transform: scale(1.1);
        background-color: var(--hoverTaskCard);
    }
`
export const TaskTitle = styled.h2`
    font-family: var(--destaqueFont);
    font-size: 18px;
    font-weight: 400;
    color: var(--contrastColor);
`
export const TaskDescription = styled.p`
    font-family: var(--secondFont);
`
export const TaskStatus = styled.p`
    font-family: var(--secondFont);
    color: var(--contrastColor);
    }
`