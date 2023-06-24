import { Container } from "./styles";

export default function MovieCard ({title, imgCard, children, ...rest}){

    return(
        <Container
        {...rest}
        >
            <h3>{title}</h3>
            {children}
            {imgCard}
        </Container>
    )
}