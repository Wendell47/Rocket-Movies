import styled from "styled-components";

export const Container = styled.div`


padding: 1.5rem 1.5rem;
font-weight: 500;

width: 100%;
display: flex;
align-items: center;


border-radius: 1rem;

background-color: var(--bg-color-700);
color: var(--color-gray-300);

> input{
    border:0;
    width: 100%;
    background: transparent;
    color: var(--color-white);

    &::placeholder{

        color: var(--color-gray-300);
    }

    &:focus-visible{
        outline: 0;
    }
}


> textArea{
    border:0;
    width: 100%;
    background: transparent;
    color: var(--color-white);

    &::placeholder{

        color: var(--color-gray-300);
    }

    &:focus-visible{
        outline: 0;
    }
}

>svg{
        margin-right: 1rem;
    }
`