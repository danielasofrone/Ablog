import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid rgba(244, 243, 242, 0.75);
  margin-top: 70px;
  padding: 50px;
  @media (min-width: 768px) {
    padding: 70px 100px;
  }
`;

export const PostTitle = styled.div`
  font-family: "Questrial", sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;
  a {
    color: rgb(65, 65, 65);
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`;

export const ImageContainer = styled.div`
  max-height: 400px;
  background-color: grey;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
    cursor: pointer;
  }
`;

export const PostText = styled.div`
  font-family: "Questrial", sans-serif;
  color: rgb(65, 65, 65);
  font-size: 18px;
  text-align: left;
  margin: 50px 0 30px 0;
`;
