import { Container } from "./styles";
import {FiPlus, FiX} from "react-icons/fi"

export default function Tag({title, isNew, icon: Icon,...rest}){
    return(
        <Container 
        isNew={isNew}
         {...rest} 
         >
            <p>{isNew ?  "Novo marcador" : title}</p>
            {Icon && <Icon size={16}/>}
           
        </Container>
    )
}