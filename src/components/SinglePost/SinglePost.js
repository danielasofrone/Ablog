import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./singlePost.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";
import client from "../../client";

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
    <S.Wrapper>
      {loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <NavBar />
          <BlogPost
            title={singleBlogPost.fields.title}
            text={singleBlogPost.fields.text}
            coverImage={singleBlogPost.fields.picture.fields.file.url}
          />
        </div>
      )}
    </S.Wrapper>
  );
};

export default SinglePost;
