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
justify-content: space-between;

> button{

    background: transparent;
    border: none;

    > svg{
    color: var(--color-primary);
}

}


    >input {

        height: 36px;
        width: min(100px);

        color: var(--color-white);
        background: transparent;

        border:none;

        &::placeholder{
            color: var(--color-gray-300);
            
        }

        &:focus-visible{
            outline: none;
        }
    }

&:hover{
    opacity: 0.9;
}
`