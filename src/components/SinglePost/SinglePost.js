import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "./singlePost.styled";
import * as S from '../BlogPost/blogPost.styled'
import NavBar from "../NavBar/NavBar";
import client from "../../client";
import { Link } from "react-router-dom";

const SinglePost = () => {
  const [singleBlogPost, setSingleBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  let { slug } = useParams();

  useEffect(() => {
    if (slug) {
      client
        .getEntries({ content_type: "blogPost", "fields.slug": slug })
        .then((response) => {
          setSingleBlogPost(response.items[0]);
          setLoading(false);
        });
    }
  }, [slug]);

  return (
    <C.PageContainer>
      {loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <NavBar />
          <C.BackButtonContainer>
            <C.BackButton>
              <Link to="/">&larr; go back</Link>
            </C.BackButton>
          </C.BackButtonContainer>
          <S.Wrapper>
            <C.SinglePostTitle>
              {singleBlogPost.fields.title}
            </C.SinglePostTitle>
            <S.PostText>{singleBlogPost.fields.text}</S.PostText>
            </S.Wrapper>
        </div>
      )}
    </C.PageContainer>
  );
};

export default SinglePost;

            // title={singleBlogPost.fields.title}
            // text={singleBlogPost.fields.text}
            // coverImage={singleBlogPost.fields.text}
    