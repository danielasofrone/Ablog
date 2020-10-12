import React from "react";
import * as S from "./aboutPage.styled";
import NavBar from "../NavBar/NavBar";

const AboutPage = () => (
  <S.Wrapper>
    <NavBar />
    <S.TextContainer>
      Hi, my name is Malin and these are my contact details...
    </S.TextContainer>
  </S.Wrapper>
);

export default AboutPage;
