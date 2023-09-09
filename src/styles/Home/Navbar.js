import styled from "styled-components";

export const Navbar = styled.div`
  position: relative;
  display: flex;
  font-family: "Geologica", sans-serif;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.6rem;
  align-items: center;

  & > svg {
    width: 2rem;
    cursor: pointer;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 1.5rem;
    cursor: pointer;
  }
`;
