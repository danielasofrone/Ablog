import React from "react";
import * as S from "./blogPost.styled";
import PropTypes from "prop-types";

const BlogPost = ({ title, postText }) => (
  <S.Wrapper>
    <S.PostTitle>{title}</S.PostTitle>
    <S.ImageContainer />
    <S.PostText>{postText}</S.PostText>
  </S.Wrapper>
);

BlogPost.defaultProps = {
  title: "Working with Architects & Developers",
  postText:
    "Summa Development Group Principals Albert Socol and Marlene Weiss have promised to bring downtown Orlando’s first 5-star convention hotel to the central business district as part of the new mixed-use tower at 319 E. Church St. The plans call for 129 branded",
};

BlogPost.propTypes = {
  title: PropTypes.string,
  postText: PropTypes.string,
};

export default BlogPost;
