import styled from "styled-components";

export const ExplorePartContainer = styled.div`
  font-family: "Geologica", sans-serif;
  font-weight: bold;
  padding: 3rem 0;

  & > h2 {
    font-size: 3.3rem;
    color: #d62d46;
    margin-bottom: 2rem;
  }
`;

export const ExplorePartNavList = styled.ul`
  display: flex;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  & > li {
    cursor: pointer;
    margin-right: 1rem;
  }
`;

export const ExploreCarousel = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 2rem;
`;

export const ExploreCarouselImgWrapper = styled.div`
  background: ${props => `url(${props.imgSrc}) no-repeat`};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 17rem;
  height: 21rem;
  border-radius: 2rem;
  cursor: pointer;
  background-position: center;
  background-size: contain;
  background-color: #e3e3e3;
  transition: all 0.3s ease-in-out;
  &:hover :first-child {
    opacity: 1;

    p {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ExploreCarouselImgTitleBox = styled.div`
  font-size: 2rem;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  top: 0;
  background: #5a5a5dab;
  padding: 1rem;
  transition: all 300ms ease-in;
  border-radius: 2rem;

  p {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 200ms ease-in;
  }
`;
