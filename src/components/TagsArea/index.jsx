
import { Container } from "./styles";

export function TagsArea({children, ...rest}){
    return(
        <Container {...rest} >
            {children}
        </Container>
    )
}
