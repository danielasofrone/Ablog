import React from "react";
import * as S from "./homePage.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";
import { data } from "../../mock/data.json";

console.log(data.posts);

const Homepage = () => (
  <S.Wrapper>
    <NavBar />
    {data.posts.map((post) => (
      <BlogPost key={post.id} {...post} />
    ))}
  </S.Wrapper>
);

export default Homepage;
