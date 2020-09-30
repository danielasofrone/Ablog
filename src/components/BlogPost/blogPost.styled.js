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
  color: rgb(65, 65, 65);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const ImageContainer = styled.div`
  height: 200px;
  background-color: grey;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

export const PostText = styled.div`
  font-family: "Questrial", sans-serif;
  color: rgb(65, 65, 65);
  font-size: 18px;
  text-align: left;
  margin: 50px 0 30px 0;
`;
