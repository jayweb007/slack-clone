import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import Loading from "./components/Loading";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Switch>
          <Route exact path="/">
            <Header />
            <Main>
              <SideBar />
              <Chat />
            </Main>
          </Route>
          <Route path="/channels/:title/:id">
            <Header />
            <Main>
              <SideBar />
              <Chat />
            </Main>
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  height: 100vh;
`;
