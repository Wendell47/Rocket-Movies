import { BackgroundImg, Container, Form } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {FiMail, FiLock} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export function SignIn(){

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Faça seu login</h3>

                <Input 
                placeholder="E-mail" 
                type="text"
                icon={FiMail}
                >
                </Input>
                
                <Input 
                placeholder="Senha" 
                type="password"
                icon={FiLock}
                >
               
                </Input>

                <Button title="Entrar"></Button>

                <a href="#">
                    Criar Conta
                </a>
            </Form>
            <BackgroundImg/>
        </Container>
    )
}