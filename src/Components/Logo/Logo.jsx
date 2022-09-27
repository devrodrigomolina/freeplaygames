import React from "react";
import { LogoContainer, LogoText } from "./style";
import { MdGames } from "react-icons/md";

const Logo = () => {
  return (
    <LogoContainer>
      <MdGames className="logo"/>
      <LogoText>
        FreePlay<span>Games</span>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
