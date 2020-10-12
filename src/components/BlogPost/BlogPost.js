import React from "react";
import * as S from "./blogPost.styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogPost = ({ title, excerpt, coverImage, text, id, slug }) => (
  <S.Wrapper>
    <S.PostTitle>
      <Link to={`/post/${slug}`}>{title}</Link>
    </S.PostTitle>
    <S.ImageContainer>
      <img src={coverImage} alt={title} />
    </S.ImageContainer>
    <S.PostText>{excerpt}</S.PostText>
    <S.PostText>{text}</S.PostText>
  </S.Wrapper>
);

BlogPost.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  cover: PropTypes.string,
  text: PropTypes.string,
};

export default BlogPost;
