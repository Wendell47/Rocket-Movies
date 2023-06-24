import styled from "styled-components";


export const Container = styled.div`

padding: .5rem 2rem;
color: var(--color-gray-100);
border-radius: .5rem;
background-color: ${({isNew}) => isNew ? "transparent" : "var(--bg-color-700)"};
font-size: 1.3rem;

border:${({ isNew}) => isNew ? "1px dashed var(--color-gray-300)" : "none"};

display: flex;
gap:10px;
align-items: center;

> svg{
    color: var(--color-primary);
}

&:hover{
    opacity: 0.9;
}
`