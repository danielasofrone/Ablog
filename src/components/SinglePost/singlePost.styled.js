import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0 10%;
`;

export const SinglePostTitle = styled.div`
  font-family: "Questrial", sans-serif;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 30px;
  a {
    color: rgb(65, 65, 65);
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 35px;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const BackButtonContainer = styled.div`
 float: left;
 margin: 30px 0;
 display: flex;
 flex-direction: row;
`;

export const BackButton = styled.div`
 background-color: #fff;
 font-family: "Questrial", sans-serif;
  font-size: 1.125rem;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  a {
    color: rgb(65, 65, 65);
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`;