import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfc9c9;
  color: #757575;
  font-weight: bold;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.3s ease-in;
  margin-left: 3.5rem;

  &:hover {
    background-color: #e7e4e4;
    color: #585858;
  }
`;

const LoginBtn = () => {
  return <Button>Login</Button>;
};

export default LoginBtn;
