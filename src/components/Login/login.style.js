import styled from "styled-components";

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const LoginLogo = styled.img`
  object-fit: contain;
  width: 100px;
  margin: 20px auto;
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
  & h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  & h5 {
    margin-bottom: 5px;
  }
  & input {
    height: 30px;
    margin-bottom: 10px;
    /* background-color: white; */
    width: 98%;
  }
  & p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

export const SignInButton = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846129;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;

export const RegistrationButton = styled.button`
  /* background-color: #f0c14b; */
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid lightgray;
  /* border-color: lightgray; */
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;
