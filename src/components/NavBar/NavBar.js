import React from "react";
import * as S from "./navBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => (
  <S.Wrapper>
    <S.Title>Ablog</S.Title>
    <S.Navigation>
      <S.MenuIcon>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>
      <S.NavLink>
        <Link to={"/about"}>About</Link>
      </S.NavLink>
    </S.Navigation>
  </S.Wrapper>
);

export default NavBar;
