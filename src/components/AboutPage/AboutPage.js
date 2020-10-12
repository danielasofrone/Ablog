import React from "react";
import * as S from "./aboutPage.styled";
import * as C from "../NavBar/navBar.styled";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <S.Wrapper>
    <NavBar>
      <C.NavLink>
        <Link to={"/"}>Home</Link>
      </C.NavLink>
      <C.NavLink>
        <Link to={"/news"}>News</Link>
      </C.NavLink>
      <C.NavLink>
        <Link to={"/contact"}>Contact</Link>
      </C.NavLink>
    </NavBar>
  </S.Wrapper>
);

export default AboutPage;
