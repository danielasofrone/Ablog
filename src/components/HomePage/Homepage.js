import React, { useState, useEffect } from "react";
import * as S from "./homePage.styled";
import * as C from "../NavBar/navBar.styled";
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
      console.log(response.items);
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
            <C.NavLink>
              <Link to={"/"}>About</Link>
            </C.NavLink>
            <C.NavLink>
              <Link to={"/news"}>News</Link>
            </C.NavLink>
            <C.NavLink>
              {" "}
              <Link to={"/contact"}>Contact</Link>
            </C.NavLink>
          </NavBar>
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
