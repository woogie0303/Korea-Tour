import styled from "styled-components";

export const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Geologica", sans-serif;
  font-weight: bold;
  height: 100%;
`;

export const StaticDescription = styled.div`
  & > h2 {
    font-size: 3.3rem;
    color: #d62d46;
    margin-bottom: 2rem;
  }

  & > p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

export const StaticMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StaticStateCarouselWrapper = styled.div`
  width: 40%;
`;

export const StaticStateCarouselBox = styled.ul`
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
`;

export const StaticStateItems = styled.li`
  width: 100%;
  color: rgb(28, 23, 80, 0.3);
  background-color: #dfdfdf;
  flex-shrink: 0;
  transition: all 0.5s ease-in-out;
  transform: ${props => "translateX(-" + props.$count * 100 + "%)"};
`;

export const StaticStateItem = styled.div`
  font-size: 1.6rem;
  padding: 1.3rem 2rem;
  cursor: pointer;

  &:hover {
    color: black;
  }

  &.active {
    color: black;
  }
`;

export const StaticStateCarouselButton = styled.div`
  display: flex;
  justify-content: flex-end;

  & > svg {
    width: 3rem;
    cursor: pointer;
    fill: #a09faf;

    &:hover {
      fill: black;
    }
  }
`;

export const StaticGraphWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: ${props => (props.$showNotification ? "100%" : "")};
  align-items: center;
  & > svg {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  }
`;

export const StaticVisitTypeGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const StaticVisitTypeBox = styled.div`
  position: relative;
  margin-bottom: 1rem;
  cursor: default;

  &::after {
    position: absolute;
    content: "";
    left: -1.3rem;
    top: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${props =>
      props.$touDiv === "현지인"
        ? "#4d4d4d"
        : props.$touDiv === "외지인"
        ? "#ff665e"
        : "#a8a8ff"};
  }
`;
