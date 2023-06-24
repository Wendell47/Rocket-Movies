import styled from "styled-components";

export const Container = styled.div`
background: var(--bg-color-900);
border-radius: 10px;

padding:20px;

display: flex;
gap:20px;
flex-wrap: wrap;

@media (max-width:655px){
    > div{
    flex: 1 0 auto;
}
}

`