import React from "react";
import { HeaderContainer, LinksMenu } from "./style";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import CartAndNotify from "../UserSection/CartAndNotify/CartAndNotify";
import UserAccount from "../UserSection/UserAccount/UserAccount";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo />

        <LinksMenu>
          <Link to='/'>Home</Link>
          <Link to='/jogos'>Jogos</Link>
          <Link to='/lancamentos'>Lançamentos</Link>
          <Link to='/noticias'>Noticias</Link>
        </LinksMenu>
        <div style={{display: 'flex'}}>

        <CartAndNotify />
        <UserAccount />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
