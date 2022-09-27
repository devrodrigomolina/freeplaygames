import React from "react";
import { HeaderContainer, ContainerInfosUser } from "./style";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import CartAndNotify from "../UserSection/CartAndNotify/CartAndNotify";
import UserAccount from "../UserSection/UserAccount/UserAccount";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to='/'>
          <Logo />
        </Link>
        <ContainerInfosUser>
          <Input />
          <CartAndNotify />
          <UserAccount />
        </ContainerInfosUser>
      </HeaderContainer>
    </>
  );
};

export default Header;
