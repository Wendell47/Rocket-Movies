
import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-columns: auto;
grid-template-rows: 100px auto;
grid-template-areas:
"header"
"content";
`

export const Content = styled.div`

grid-area: content;
overflow-y: auto;

> div{
  
  > button{
    margin-bottom: 2rem;
  }
  > h2{
    margin-bottom: 3rem;
  }
  > div{
    margin-bottom: 3rem;
  }

  > h3{
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
`

export const InputGrid = styled.div`
display: flex;
flex-wrap: wrap;
gap: 30px;

> div:nth-child(1){
    flex: 2 0 auto;
    width: auto;
}
> div:nth-child(2){
    flex: 1 0 auto;
    width: auto;
}
> div:nth-child(3){
    flex: 1 0 100%;
    width: auto;
  > textArea{
    width: 100%;
    height: 300px;
    resize: none;
  }


}
`

export const ButtonsArea = styled.div`
display: flex;
flex-wrap: wrap;
gap: 30px;

> a{
    flex:1 0 auto;
    width: auto;
}
`