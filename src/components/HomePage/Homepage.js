import React from "react";
import * as S from "./homePage.styled";
import NavBar from "../NavBar/NavBar";
import BlogPosts from "../BlogPosts/BlogPosts";

const Homepage = () => (
  <S.Wrapper>
    <NavBar />
    <BlogPosts />
  </S.Wrapper>
);

export default Homepage;
