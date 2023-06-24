import Header from "../../components/Header";
import ContainerContent from "../../components/ContainerContent";
import { Title } from "../../components/Title";
import Input from "../../components/Input";
import { Container, Content, InputGrid, ButtonsArea} from "./styles";
import Button from "../../components/Button";
import { TagsArea } from "../../components/TagsArea";
import TagAdd from "../../components/TagAdd";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";


export function CreateMovie () {
    

function handleBack(){
    
    navigate(-1)
  }
  
  const navigate = useNavigate()
    return(
        <Container>
        <Header/>

        <Content>
           
        <ContainerContent>
            <ButtonText  
            title="Voltar"
            onClick={handleBack}
            />
            <Title title="Novo Filme"/>
        
            <InputGrid>
            <Input placeholder="Título" type="text"/>
            <Input placeholder="Sua nota (0 a 5)" type="text"/>
            <Input placeholder="Observações"TextArea={true}/>
            </InputGrid>
            <h3>Marcadores</h3>
        <TagsArea>
            <TagAdd value="React" />
            <TagAdd  isNew={true}
            />
        </TagsArea>
      
            <ButtonsArea>
            <Button title="Excluir filme" btnSecondary={true}/>
            <Button title="Salvar alterações"/>
            </ButtonsArea>
            
        </ContainerContent>

        </Content>
        </Container>
    )
}