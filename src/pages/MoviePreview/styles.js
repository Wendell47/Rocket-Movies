import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-columns: auto ;
grid-template-rows: 110px auto;
grid-template-areas:

"header"
"content"

;

.flex{
    display: flex;
    align-items: center;
    gap: 20px;
}
`

export const Content = styled.div`

grid-area: content;
overflow-y: hidden;

> div {
 

   > div{
    margin-bottom: 2rem;
   }

   > div:nth-child(2){
        margin-top: 2rem;
    }

    > div:nth-child(4){
        margin-bottom: 4rem;
    }
}

`

export const TagsContent = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;

`

export const TextContent = styled.div`
    overflow-y: auto;
    height: max(40vh);
>p{

    margin-bottom: 2rem;
    text-align:justify;
}
`