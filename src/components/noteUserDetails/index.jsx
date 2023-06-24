import { Container, UserMiniProfilePic} from "./styles";
import {FiClock} from "react-icons/fi"
export default function NoteUserDetails(){

    return(
        <Container>
            <div>
            <UserMiniProfilePic>
            <img 
                src="https://github.com/Wendell47.png" 
                alt="Foto de perfil do usuário" 
                />
</UserMiniProfilePic>

<span>Por Wendel Araujo</span>


            </div>
            <div>
                <FiClock/>
                <span>23/05/22 às 08:00</span>
            </div>
        </Container>
    )
}