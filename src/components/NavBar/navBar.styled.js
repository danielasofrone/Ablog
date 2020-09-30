import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: #afafaf;
    transition: color 0.4s ease 0s;
    font-family: "Mulish";
    line-height: 32px;
    margin: 5px 10px 0 10px;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;
export const MenuIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #afafaf;
  margin-top: 10px;
  &:hover {
    color: #000;
  }
  svg {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  color: #000;
  font-family: "Questrial", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`;
