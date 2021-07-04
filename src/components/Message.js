import React from "react";
import styled from "styled-components";

function Message({ id, message, timestamp, userName, userEmail, userPhoto }) {
  return (
    <Container>
      <img src={!userPhoto ? "/images/slack.png" : userPhoto} alt="" />
      <DetailsInfo>
        <h4>
          {!userName ? "Jayweb007" : userName}{" "}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </DetailsInfo>
    </Container>
  );
}

export default Message;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 999px;
  }
`;

const DetailsInfo = styled.div`
  margin-left: 15px;

  h4 {
    margin-bottom: 4px;
    span {
      padding-left: 15px;
      font-size: 11px;
      color: grey;
    }
  }
`;
