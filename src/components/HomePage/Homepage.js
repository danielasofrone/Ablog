import React, { useState, useEffect } from "react";
import * as S from "./homePage.styled";
import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";
import { Link } from "react-router-dom";
import client from "../../client";

const Homepage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntries({ content_type: "blogPost" }).then((response) => {
      setBlogPosts(response.items);
      setLoading(false);
    });
  }, []);

  return (
    <S.Wrapper>
      {loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <NavBar>
            <Link to={"/about"}>About</Link>
          </NavBar>
          {blogPosts.map((blogPost, i) => (
            <BlogPost
              id={i}
              key={i}
              title={blogPost.fields.title}
              excerpt={blogPost.fields.excerpt}
              coverImage={blogPost.fields.picture.fields.file.url}
            />
          ))}
        </div>
      )}
    </S.Wrapper>
  );
};

export default Homepage;
