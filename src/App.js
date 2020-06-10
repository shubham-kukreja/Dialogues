import React from "react";
import "./App.css";
import MainScreen from "./components/MainScreen";
import { Container } from "@material-ui/core";
import * as firebase from "firebase";

var firebaseConfig = {
  //your api key
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <MainScreen />
      </Container>
    </div>
  );
}

export default App;
