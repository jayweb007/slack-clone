import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import InfoIcon from "@material-ui/icons/Info";
import { useSelector } from "react-redux";
import { selectRoomId, selectRoomName } from "../features/appSlice";
import ChatInput from "./ChatInput";
import hero from "../img/hero.png";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const roomName = useSelector(selectRoomName);
  const chatRef = useRef(null);
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>{roomName ? `#${roomName}` : "#Welcome"}</strong>
            <StarIcon />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoIcon /> Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessages>
        {roomMessages?.docs.map((doc) => {
          const { message, timestamp, userName, userEmail, userPhoto } =
            doc.data();

          return (
            <Message
              key={doc.id}
              id={doc.id}
              message={message}
              timestamp={timestamp}
              userName={userName}
              userEmail={userEmail}
              userPhoto={userPhoto}
            />
          );
        })}
        <h4 ref={chatRef} style={{ borderBottom: 200 }}>
          {" "}
        </h4>
      </ChatMessages>

      <ChatInput channelId={roomId} channelName={roomName} chatRef={chatRef} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  position: relative;
  background-color: #eeeeee;
  background-image: url(${hero});
  background-size: contain;
  /* background-repeat: no-repeat; */
  opacity: 0.2;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #49274b;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  h4 {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      margin-left: 10px;
      color: #45054d;
    }
  }
`;

const HeaderRight = styled.div`
  p {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      margin-right: 10px;
      color: #45054d;
    }
  }
`;

const ChatMessages = styled.div``;
