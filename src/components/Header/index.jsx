import Input from "../Input";
import { Container, Profile} from "./styles";
import { Link } from "react-router-dom";
import {FiArrowLeft, FiMail, FiUser, FiLock, FiCamera, FiSearch,FiMenu} from 'react-icons/fi';
import { ButtonText } from "../ButtonText";
import { MenuMobile } from "../MenuMobile";
import { useState } from "react"


export default function Header(){
   
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(
        <Container>
                <div>
                <div className="Brand"><h1>RocketNotes</h1></div>
                <Input
                className="hidden"
                icon={FiSearch}
                placeholder="Pesquisar por título"
                type="text"
                />

                <div className="profile hidden">
                <Profile >
               

                <div>
                    
                    <strong>Wendel Araujo</strong>
                    <ButtonText title="Sair" className="buttonExit"/>
                </div>
                 <img src="https://github.com/Wendell47.png" alt="foto de perfil" />
                </Profile>
                </div>
                <div className="menuMobileBtn" onClick={() => setMenuIsVisible(true)}>
                
                        <FiMenu/>
                    
                </div>
                <MenuMobile menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
                >
                    
                <div className="profile">
                <Profile >

                <div>
                    <span>Bem-vindo</span>
                    <strong>Wendel Araujo</strong>
                </div>
                 <img src="https://github.com/Wendell47.png" alt="foto de perfil" />
                </Profile>

                </div>
                <Input
                icon={FiSearch}
                placeholder="Pesquisar por título"
                type="text"
                />
                </MenuMobile>
                </div>
                
        </Container>
    )
}