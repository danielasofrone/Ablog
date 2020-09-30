import React from "react";
import * as S from "./aboutPage.styled";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <S.Wrapper>
    <S.NavigationLink>
      <Link to={"/"}>Home</Link>
    </S.NavigationLink>
  </S.Wrapper>
);

export default AboutPage;
