import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  margin: 5% 10%;
  display: flex;
  justify-content: flex-end;
`;

export const NavigationLink = styled.div`
  float: right;
  cursor: pointer;

  a {
    color: #afafaf;
    text-decoration: none;
    background-color: inherit;
    font-family: "Mulish";
    line-height: 32px;
  }
  &:hover {
    color: #000;
    text-decoration: none;
  }
`;
