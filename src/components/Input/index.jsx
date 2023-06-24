/* eslint-disable react/prop-types */
import { Container} from "./styles";

export default function Input({TextArea = false ,icon: Icon, ...rest}){

    
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            {!TextArea ? <input {...rest}/> :  <textArea {...rest}/>}
        </Container>
    )
}