import React, { useState, useEffect } from "react";
import * as S from "./homePage.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";
import client from "../../client";

const Homepage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntries({ content_type: "blogPost" }).then((response) => {
      setBlogPosts(response.items);
      setLoading(false);
      console.log(response.items);
    });
  }, []);

  return (
    <S.Wrapper>
      {loading ? (
        <div>
          <S.LoadingState>Loading...</S.LoadingState>
        </div>
      ) : (
        <div>
          <NavBar />
          {blogPosts.map((blogPost) => (
            <BlogPost
              id={blogPost.sys.id}
              key={blogPost.sys.id}
              title={blogPost.fields.title}
              excerpt={blogPost.fields.excerpt}
              coverImage={blogPost.fields.picture.fields.file.url}
              slug={blogPost.fields.slug}
            />
          ))}
        </div>
      )}
    </S.Wrapper>
  );
};

export default Homepage;
