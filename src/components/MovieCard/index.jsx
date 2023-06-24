import { Container } from "./styles";

export default function MovieCard ({title, imgCard, children}){

    return(
        <Container>
            <h3>{title}</h3>
            {children}
            {imgCard}
        </Container>
    )
}