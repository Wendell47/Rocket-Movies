import styled from "styled-components";

export const Container = styled.div`
display: flex;

gap: 10px;

> svg{
    color:var(--color-primary);
    fill: var(--color-primary);
}

> svg:last-child{
    fill: transparent;
}

`