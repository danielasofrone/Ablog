import React, { useState, useEffect } from "react";
import * as S from "./singlePost.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";
import client from "../../client";

// import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [singleBlogPost, setSingleBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect((params) => {
    if (params && params.slug) {
      client
        .getEntries({ content_type: "blogPost", "fields.slug": params.slug })
        .then((response) => {
          setSingleBlogPost({ singleBlogPost: response.items[0] });
          setLoading(false);
          console.log("hello", params.slug);
        });
    }
  }, []);

  // let { id, slug } = useParams();
  // console.log({ id, slug });

  // const postData = axios.get(`http://api.com/single/?postId=${id}`);

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
