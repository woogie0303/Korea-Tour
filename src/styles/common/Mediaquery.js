import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  HomeContainer,
  HomeContentContainer,
  HomeImgWrapper,
} from "../Home/Home";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:786px)",
  });

  return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
  const isPC = useMediaQuery({
    query: "(min-width:787px)",
  });
  console.log(isPC);

  return <>{isPC && children}</>;
};

export const MobileContainer = styled.div`
  ${HomeContainer} {
    flex-direction: column;
  }

  ${HomeContentContainer} {
    width: 100%;
  }

  ${HomeImgWrapper} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    & > div {
      border-bottom-right-radius: 0;
    }
  }
`;
