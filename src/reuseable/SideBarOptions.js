import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SideBarOptions({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name Here");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
          roomName: title,
        })
      );
    }

    history.push(`/channels/${title}/${id}`);
  };

  return (
    <Container onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <OptionChannel>
          <span>#</span> {title}
        </OptionChannel>
      )}
    </Container>
  );
}

export default SideBarOptions;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 14px;
    font-weight: 500;
    padding-left: 5px;
  }

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }
`;

const OptionChannel = styled.h3`
  padding: 10px 0;

  span {
    padding: 15px 17px 0 10px;
  }
`;
