import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));

    history.push("/");
  };

  return (
    <Container>
      <Body>
        <img src="/images/slack.png" alt="" />
        <h1>slack</h1>
      </Body>
      <LoginInfo>
        <Button
          onClick={login}
          variant="contained"
          size="large"
          color="primary"
        >
          LOGIN
        </Button>
        <p>by Jayweb007</p>
      </LoginInfo>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6a1b9a;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: 100px;
    color: white;
  }
`;

const LoginInfo = styled.div`
  p {
    margin-top: 30px;
    color: white;
    font-size: 13px;
  }
`;
