import React from "react";
import * as S from "./navBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ children }) => (
  <S.Wrapper>
    <S.Title>
      <Link to={"/"}>Ablog</Link>
    </S.Title>
    <S.Navigation>
      <S.MenuIcon>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>
      <S.NavLink>
        <Link to={"/about"}>About</Link>
      </S.NavLink>
      <S.NavLink>
        <Link to={"/news"}>News</Link>
      </S.NavLink>
      <S.NavLink>
        <Link to={"/contact"}>Contact</Link>
      </S.NavLink>
    </S.Navigation>
  </S.Wrapper>
);

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
