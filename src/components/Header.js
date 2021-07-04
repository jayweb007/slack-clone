import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Avatar } from "@material-ui/core";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth);

  const logout = () => {
    if (auth.signOut()) {
      <Redirect to="/" />;
    }
  };
  return (
    <Container>
      {!user && <Redirect to="/" />}
      <HeaderLeft>
        <Picture onClick={logout} src={user?.photoURL}></Picture>
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderCenter>
        <SearchIcon />
        <input type="text" placeholder="Search PAPAFAM" />
      </HeaderCenter>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #45054d;
  padding: 10px 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  .MuiSvgIcon-root {
    color: white;
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Picture = styled(Avatar)`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderCenter = styled.div`
  flex: 0.4;
  display: flex;
  opacity: 1;
  text-align: center;
  border-radius: 7px;
  border: 1px solid gray;
  background-color: #421f44;
  padding: 0 50px;

  input {
    min-width: 30vw;
    text-align: center;
    margin-left: 10px;
    outline: none;
    border: none;
    color: white;
    text-align: center;
    background-color: transparent;
  }

  .MuiSvgIcon-root {
    color: grey;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;

  .MuiSvgIcon-root {
    color: white;
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
  }
`;
