import styled from "styled-components";
import bgImg from '../../assets/bgimg.jpg'

export const Container = styled.div`

height: 100vh;

display: flex;

align-items: center;
justify-content: center;


`

export const Form = styled.form`

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;


width: 500px;

padding: 30px 80px;
border-radius: 3rem;

background-color: rgb(255 255 255 / 7%) ;

backdrop-filter: blur(16px);


> h1{
    color: var(--color-primary)
}

> p{
    color: var(--color-gray-100);
    margin-bottom: 4rem;
    font-weight:100;
}

> h3{
  margin-bottom: 5rem;
}

> a{
    margin-top: 124px;
    color: var(--color-primary);
}

> div {
    margin-bottom: 1rem;
}

@media (max-width:520px){
width: 100%;
margin: 0 20px;
padding: 0 40px;
}

> input{
    margin-bottom: 1rem;
};
`

export const BackgroundImg = styled.div`

position: absolute;
left: 0;
right: 0;
bottom:0;
top:0;

background: url(${bgImg}) no-repeat center center, var(--bg-color-900);

background-size: cover;
background-blend-mode: soft-light;
z-index: -1;

`

