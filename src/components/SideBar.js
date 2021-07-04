import React from "react";
import styled from "styled-components";
import SideBarOptions from "../reuseable/SideBarOptions";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("rooms"));

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {`# ${user?.uid.substr(0, 5)}`}
          </h3>
        </HeaderInfo>
        <Create></Create>
      </Header>

      <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
      <SideBarOptions Icon={InboxIcon} title="Mentions & Reactions" />
      <SideBarOptions Icon={DraftsIcon} title="Saved Items" />
      <SideBarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SideBarOptions Icon={PeopleAltIcon} title="People & User Groups" />
      <SideBarOptions Icon={AppsIcon} title="Apps" />
      <SideBarOptions Icon={FileCopyIcon} title="File Browser" />
      <SideBarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SideBarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SideBarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  flex: 0.3;
  color: white;
  background-color: #45054d;
  max-width: 260px;
  border-top: 1px solid #49274b;
  margin-top: 60px;

  hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 13px;
  align-items: center;
  border-bottom: 1px solid #49274b;
`;

const HeaderInfo = styled.div`
  flex: 1;

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  h3 {
    display: flex;
    font-size: 13px;
    margin-top: 1px;
    align-items: center;

    .MuiSvgIcon-root {
      font-size: 14px;
      color: green;
    }
  }
`;

const Create = styled(CreateIcon)`
  background-color: white;
  padding: 8px;
  border-radius: 999px;
  color: #49274b;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
