import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Body>
        <img src="/images/loading.gif" alt="" />
      </Body>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eceff1;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
