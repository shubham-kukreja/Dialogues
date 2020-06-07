import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ConversationBox from "./ConversationBox";
import Typography from "@material-ui/core/Typography";
import { HUMAN, BOT } from "../../constants";
import Firebase from "firebase";

function MainScreen() {
  const [conversation, setConversation] = useState([]);

  const handleSave = async () => {
    if (conversation.length === 0) {
      alert("Please Add at least one dialogue.");
      return;
    }
    await Firebase.database()
      .ref("/" + new Date().toUTCString())
      .set({ conversation: conversation, date: new Date().toDateString() });

    setConversation([]);
  };

  const reset = () => {
    setConversation([]);
  };

  return (
    <div>
      <ConversationBox
        conversations={conversation}
        setConversation={setConversation}
      />
      <InputComponent
        conversations={conversation}
        setConversation={setConversation}
        handleSave={handleSave}
        reset={reset}
      />
    </div>
  );
}

export default MainScreen;
