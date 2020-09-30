import React from "react";
import * as S from "./homePage.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";

const Homepage = () => (
  <S.Wrapper>
    <NavBar />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
  </S.Wrapper>
);

export default Homepage;
