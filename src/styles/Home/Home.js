import styled from "styled-components";
import img from "../../assets/imgs/homeImg.jpg";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const HomeImgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;

  background: url(${img}) no-repeat;
  background-position: center center;
  background-size: cover;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
`;

export const HomeImgTitleBox = styled.div`
  flex: 1;
  color: white;
  height: 40%;
  padding: 12% 5%;
  border-bottom-right-radius: 5rem;
  background: linear-gradient(
    to bottom,
    rgb(28, 23, 80, 0.3),
    rgb(28, 23, 80, 0.7)
  );
  & > h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  & > p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const HomeContentContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4rem 6rem;
`;
