import styled from "styled-components";

export const BookmarkLayout = styled.div`
  position: absolute;
  top: 0;
  right: ${props => (props.$bookmarkShow ? 0 : "-60%")};
  background-color: #dfdfdf;
  width: 60%;
  height: 100%;
  z-index: 1;
  padding: 2rem;
  overflow: scroll;
  transition: all 0.3s ease-in;

  svg {
    font-size: 3rem;
    margin-bottom: 3rem;
    cursor: pointer;
  }
`;

export const BoomarkList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  font-size: ${props => (props.$tourCartLength ? "1.2rem" : "")};
  color: ${props => (props.$tourCartLength ? "rgb(28, 23, 80, 0.3)" : "")};
`;

export const BookmarkItem = styled.li`
  position: relative;
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;

  img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    margin-right: 2rem;
    border-radius: 2rem;
  }

  p {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  svg {
    font-size: 2rem;
    position: absolute;
    right: 1.5rem;
    top: 1rem;
  }

  p {
    font-size: 2rem;
  }
`;
