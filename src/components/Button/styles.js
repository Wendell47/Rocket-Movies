import styled from "styled-components";


export const BtnPrimary = styled.button`

width: 100%;

display: flex;
text-align: center;
justify-content: center;

background-color: var(--color-primary);
color: var(--bg-color-800);

border:0;
padding: 1.5rem 1.9rem;
border-radius: 1rem;
font-weight:500;


&:disabled{
    opacity: 0.5;
    cursor: pointer;
}

> svg{
    display: inline-flex;
    align-items: center;
    margin-right: .5rem;
}
`

export const BtnSecondary = styled.button`

width: 100%;

display: flex;
text-align: center;
justify-content: center;

background-color: var(--bg-color-900);
color: var(--color-primary);

border:0;
padding: 1.5rem 1.9rem;
border-radius: 1rem;
font-weight:500;


&:disabled{
    opacity: 0.5;
    cursor: pointer;
}

> svg{
    display: inline-flex;
    align-items: center;
    margin-right: .5rem;
}
`