import { Container } from "./styles";
import {FiArrowLeft} from "react-icons/fi"
export function ButtonText({icon: Icon, title, isActive = true, ...rest}){

    return(

        <Container 
        type="button"
        isActive={isActive}
        {...rest}
        >
          <FiArrowLeft/> {title}
        </Container>

    );
}