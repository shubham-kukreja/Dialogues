import React, { useRef, useEffect } from "react";
import { HUMAN } from "../../constants";
import "../../App.css";
import { IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

function ConversationBox(props) {
  const messagesEndRef = useRef(null);

  const deleteDialogue = (index) => {
    const newConversation = [...props.conversations];
    newConversation.splice(index, 1);
    props.setConversation(newConversation);
  };
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [props.conversations]);

  return (
    <div className='main-container'>
      <div className="header">{new Date().toDateString()}</div>
      <div className="dialogue-container">
        {props.conversations.map((item, index) => (
          <div className="row" key={index}>
            <div
              className={
                item.author === HUMAN ? "dialogue d-human" : "dialogue d-bot"
              }
            >
              {item.author === HUMAN ? "Human :" : "Bot :"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.value}
            </div>
            <IconButton onClick={() => deleteDialogue(index)}>
              <CancelIcon />
            </IconButton>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default ConversationBox;
