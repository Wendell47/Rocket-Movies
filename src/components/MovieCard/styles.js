import styled from "styled-components";


export const Container = styled.div`

padding: 20px;
border-radius: 1.5rem;
background: var(--bg-color-600);
outline: 01px solid var(--bg-color-500);
position: relative;
overflow: hidden;
> p{
    color: var(--color-gray-300)

   
}

&:hover{
    background: var(--bg-color-500);
}

> img{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20%;
    height: 100%;
    object-fit: cover;

}
`