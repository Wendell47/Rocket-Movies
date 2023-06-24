import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;


display: grid;

grid-template-columns: auto;
grid-template-rows: 105px 105px auto;
grid-template-areas:
"header"
"movieTitle"
"content"

;



.content {
    width: 100%;
    grid-area: content;
    overflow-y: auto;
}
`
export const GridTitle = styled.div`
width: 100%;
grid-area: movieTitle;
max-width: 1300px;
margin: 0 auto;
padding: 0 20px;
background: linear-gradient(180deg, rgba(28,27,30,1) 80%, rgba(28,27,30,0) 100%);
margin-bottom: -40px;
z-index: 1;
`

export const Content = styled.div`

max-width: 1300px;

margin: 0 auto;
padding: 0 20px;


`
export const MoviesTitle = styled.div`

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0;
     button{
    
    width: 200px;
 }

`

export const MoviesContent = styled.div`


height: 100%;

> div + div {
    margin-top:3rem;
}
> div:first-child{
    margin-top: 3rem;
}
> div:last-child{
    margin-bottom: 3rem;
}
`

export const TagsContent = styled.div`

display: flex;
gap: 1rem;
flex-wrap: wrap;
margin-top:2rem;
`
