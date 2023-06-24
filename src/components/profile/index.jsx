import { Container, } from "./styles";
import { Link } from "react-router-dom";
import {FiArrowLeft, FiMail, FiUser, FiLock, FiCamera} from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Form } from "./styles";
import { Avatar } from "./styles";

export function Profile(){

    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft/>

                </Link>
            </header>

        <Form>
            <Avatar>
                <img 
                src="https://github.com/Wendell47.png" 
                alt="Foto de perfil do usuário" 
                />

                <label htmlFor="avatar">
                    <FiCamera/>
                <input 
                id="avatar"
                type="file"/>
                </label>
            </Avatar>
            
            <Input 
            placeholder="None"
            type="text"
            icon={FiUser}>
            
            </Input>
            <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}>
            
            </Input>
            <Input 
            placeholder="Senha Atual"
            type="password"
            icon={FiLock}>
            
            </Input>
            <Input 
            placeholder="Senha Nova"
            type="password"
            icon={FiLock}>
            
            </Input>
            <Button title="Salvar"/>
        </Form>
        </Container>
    )
}