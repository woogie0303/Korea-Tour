import styled from "styled-components";

export const TourNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  background-color: ${props => (props.$fix ? "#f2e1c5" : "none")};
  position: fixed;
  z-index: 3;
  transition: all 0.3s ease-in;

  svg {
    cursor: pointer;
    margin-left: 1.3rem;
  }
`;

export const TourNavLists = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: grey;
  transition: all 0.3s ease-in;
`;

export const TourNavList = styled.li`
  padding: 0 2rem;
  cursor: pointer;

  &.active {
    color: black;
  }
`;
