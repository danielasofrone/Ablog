import React from "react";
import * as S from "./navBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
  <S.Wrapper>
    <S.Title>Ablog</S.Title>
    <S.Navigation>
      <S.MenuIcon>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>
      <S.NavLink>Blog</S.NavLink>
      <S.NavLink>About</S.NavLink>
      <S.NavLink>Contact</S.NavLink>
      <S.NavLink>News</S.NavLink>
    </S.Navigation>
  </S.Wrapper>
);

export default NavBar;
