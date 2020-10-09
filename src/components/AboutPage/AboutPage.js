import React from "react";
import * as S from "./aboutPage.styled";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <S.Wrapper>
    <NavBar>
      <Link to={"/"}>Home</Link>
    </NavBar>
  </S.Wrapper>
);

export default AboutPage;
