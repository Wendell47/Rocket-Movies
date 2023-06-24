import styled from "styled-components";

export const Container = styled.div`

display: flex;

gap: 20px;

> div {
    display: flex;
    gap: 10px;
    align-items: center;
}


> svg{
    width: 30px;
    height: 30px;
    color:var(--color-primary);
}
`

export const UserMiniProfilePic = styled.div`

width: 20px;
height: 20px;
border-radius: 100%;
background: var(--bg-color-900);


> img{
    width: 100%;
}
`