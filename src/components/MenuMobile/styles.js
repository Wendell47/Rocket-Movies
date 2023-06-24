import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  padding: 0 30px;
  gap:30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
    
  background: var(--bg-color-900);


  opacity: 0;
  

  transition: .5s;

  visibility: hidden;
    
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }



  ${({ isVisible }) => isVisible && css`
    display: flex;
    opacity: 1;
    visibility: visible;
    
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;