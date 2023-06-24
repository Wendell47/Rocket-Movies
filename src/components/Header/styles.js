import styled from "styled-components";


export const Container = styled.div`

grid-area: header;
width: 100%;
height: 100%;



> div{

display: flex;
gap: 6.4rem ;
align-items: center;
margin: 0 auto;
justify-content: space-between;
max-width: 1300px;
height: 100%;
padding: 0 20px;

@media (max-width:750px) {
   
    > div:nth-child(2){
        display: none;
    }
}
}

border-bottom: 1px solid var(--bg-color-700);

.Brand{
    h1{
        font-size: 2.4rem;
        color: var(--color-primary);
    }
}
.menuMobileBtn{
    display: none;
}
@media (max-width:650px) {
    .hidden{

        display: none;
    }
    .menuMobileBtn{
        display: block ;
    }
}

`

export const Profile = styled.a`

display: inline-flex;
align-items: center;
gap:10px;
width: 200px;
> img{

    height: 30%;
    width: 30%;
    border-radius: 50%;
}

>div{
    display: inline-flex;
    flex-direction: column;
    line-height: 24px;
    text-align: right;

   > .buttonExit{
    justify-content: end;
    font-size: 1%.4;
}
    span{
        font-size: 1.4rem;
        color:${({theme}) => theme.COLORS.GRAY_100}
    }
    strong{
        font-size: 1.8rem;
        color:${({theme}) => theme.COLORS.WHITE }
    }
}

> button{
    svg{
    width: 10px;
    height: 10px;
}
}
`;
