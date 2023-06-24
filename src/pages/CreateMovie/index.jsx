import Header from "../../components/Header";
import ContainerContent from "../../components/ContainerContent";
import { Title } from "../../components/Title";
import Input from "../../components/Input";
import { Container, Content, InputGrid, ButtonsArea} from "./styles";
import Button from "../../components/Button";
import { TagsArea } from "../../components/TagsArea";
import Tag from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";



export function Profile () {
    
    return(
        <Container>
        <Header/>

        <Content>
           
        <ContainerContent>
            <ButtonText  title="Voltar"/>
            <Title title="Novo Filme"/>
        
            <InputGrid>
            <Input placeholder="Título" type="text"/>
            <Input placeholder="Sua nota (0 a 5)" type="text"/>
            <Input placeholder="Observações"TextArea={true}/>
            </InputGrid>
            
        <TagsArea>
            <Tag title="React" />
            <Tag title="React"  disabled={true} isNew={true}/>
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