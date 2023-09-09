import styled from "styled-components";

export const TourContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TourGridWrapper = styled.div`
  display: grid;
  padding: 9rem 0;
  gap: 3rem;
  grid-template-columns: repeat(3, 24rem);
  grid-auto-flow: row;
`;

export const TourGridItem = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 2rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: inherit;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 200ms opacity ease-in;
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    z-index: -1;
  }

  p {
    font-size: 1.5rem;
    left: 1.5rem;
    bottom: 1.5rem;
    position: absolute;
    color: white;
    font-weight: bold;
    z-index: 1;
  }

  div {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 8px;
    right: 10px;
    border: 3px solid white;
    border-radius: 2rem;
    z-index: 2;
    background-color: ${props =>
      props.$activeBookmarkIcon ? "black" : "none"};
  }

  &:nth-child(1),
  &:nth-child(11) {
    grid-column: 1/3;
  }
  &:nth-child(7) {
    grid-column: 2/4;
  }

  &:hover::after {
    opacity: 1;
  }
`;
