
import Button from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import Input from "../../components/Input";
import {FiCamera} from "react-icons/fi"
import { Container, Header, Content, ContainerContentForm, PerfilImg} from "./styles";
import ContainerContent from "../../components/ContainerContent"
import { useNavigate } from "react-router-dom";

export function Profile(){
    function handleBack(){
    
        navigate(-1)
      }
      
      const navigate = useNavigate()

    return(
        <Container>
        <Header>
            <ContainerContent>
            <div>
             <ButtonText 
             title="Voltar"
             onClick={handleBack}
             />
            </div>
            </ContainerContent>
      
        </Header>
        <Content>
            <ContainerContentForm>

        <PerfilImg>

            <span>
                <FiCamera/>
            </span>
        </PerfilImg>
                <div>
                <Input
                placeholder="Nome"
                />
                <Input
                placeholder="email"
                />
                
                </div>
                <div>
                <Input
                placeholder="Senha Atual"
                />
                <Input
                placeholder="Nova Senha"
                />
                </div>
               
                <Button title="Salvar"/>
            </ContainerContentForm>
        
        </Content>
        </Container>
    )
}