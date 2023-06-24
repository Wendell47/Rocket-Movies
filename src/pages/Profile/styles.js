import styled from "styled-components";


export const Container = styled.div`

grid-template-columns: auto;
grid-template-rows: 120px auto;
display: grid;
grid-template-areas: 
"header"
"content"
;
`


export const Header = styled.div`

background: var(--bg-color-700);
grid-area: header;


> div{
    height: 100%;
    display: flex;
    align-items: center;
   
}

`



export const Content = styled.div`
grid-area: content;

`

export const ContainerContentForm = styled.div`
max-width: 300px;
margin: 0 auto;

margin-top: -9rem;

> div {
    margin-bottom: 16px;

    > div{
        margin-bottom: .7rem;
    }
}
`

export const PerfilImg = styled.div`

    border-radius:99rem;
    width: 18rem;
    height: 18rem;
    position: relative;
    margin: 0 auto;
    margin-bottom: 5rem !important;
    background: var(--bg-color-500);
    
    > span{
        position: absolute;
        right: 20px;
        bottom: 0;
        width: 4rem;
        height: 4rem;
        border-radius: 8rem;
        background: var(--color-primary);
        display:flex;
        align-items: center;
        justify-content: center;

        > svg{
            color: black;
            width: 1.8rem;
            height: 1.8rem;
        }
    }

`