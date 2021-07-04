import React from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
    });

    setInput("");

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <form>
        <input
          disabled={!channelId}
          value={input}
          placeholder={
            channelName
              ? `Chat in #${channelName}`
              : "Select a Channel to Chat ✍️"
          }
          onChange={(e) => setInput(e.target.value)}
        />
        <button hidden onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  border-radius: 20px;

  form {
    display: flex;
    position: relative;
    justify-content: center;

    input {
      display: flex;
      position: fixed;
      bottom: 30px;
      width: 60%;
      border-radius: 5px;
      border: 1px solid #49274b;
      padding: 20px;
      outline: none;
      background-color: #f5f5f5;
      font-weight: 500;
      box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    }
  }
`;
