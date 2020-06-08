import React from "react";
import "./App.css";
import MainScreen from "./components/InputComponent/MainScreen";
import { Container } from "@material-ui/core";
import * as firebase from "firebase";

var firebaseConfig = {
  //your api key
  apiKey: "AIzaSyDDpc2caXDRW_Lwpm8Qj-qfZONGvwwSgPE",
  authDomain: "coronacountindia.firebaseapp.com",
  databaseURL: "https://coronacountindia.firebaseio.com",
  projectId: "coronacountindia",
  storageBucket: "coronacountindia.appspot.com",
  messagingSenderId: "444376998366",
  appId: "1:444376998366:web:5caa794e24b40d4274fd4f",
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
