import { BackgroundImg, Container, Form } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export function SignUp(){

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Criar sua conta</h3>

                <Input 
                placeholder="Nome" 
                type="text"
                icon={FiUser}
                />

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
                    <FiArrowLeft/> Voltar para o login
                </a>
            </Form>
            <BackgroundImg/>
        </Container>
    )
}