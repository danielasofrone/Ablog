import React from "react";
import * as S from "./singlePost.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";

import { useParams } from "react-router-dom";

const SinglePost = () => {
  let { id, slug } = useParams();
  console.log({ id, slug });

  const postData = axios.get(`http://api.com/single/?postId=${id}`);

  return (
    <S.Wrapper>
      <NavBar />
      <BlogPost key={postData.id} {...postData} />
    </S.Wrapper>
  );
};

export default SinglePost;
