import styled, { keyframes } from "styled-components";

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    margin-top: 2rem;
    color: #c3c4cb;
    font-size: 1.3rem;
  }
`;

export const NotificationLoading = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 8px solid #c3c4cb;
  border-top: 8px solid #898a8c;
  animation: ${rotateLoading} 2s linear infinite;
`;

export const NotificationError = styled.div`
  & > svg {
    width: 5rem;
    height: 5rem;
    color: #898a8c;
  }
`;
