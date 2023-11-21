import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 110%;
  padding: 20px 0px;

  input {
    width: 100%;
    height: 50px;
    padding: 14px 16px 0 10px;

    border: none;
    border-bottom: 2px solid var(--contrastColor);

    background: none;

    font-family: var(--secondFont);
    font-size: 20px;
  }

  label {
    font-size: 25px;
    font-family: var(--destaqueFont), sans-serif;

    
    color: var(--lettersColor);
    opacity: 0.5;
    pointer-events: none;
    
    position: absolute;
    transform: translate(0, 10px) scale(1);
    
    transform-origin: top left;
    transition: all 0.3s ease-out;
  }
  &:focus-within label {
    transform: translate(0, -12px) scale(0.85);
  }

  &.login label {
    margin-left: 82%;
    padding: 0 3px;

    //tela tablet e celular
    @media (max-width: 1100px) {
      margin-left: 57%;
    }
  }

  &.singin label {
    padding: 0 3px;
  }
}
`