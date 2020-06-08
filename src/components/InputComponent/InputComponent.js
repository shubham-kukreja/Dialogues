import React, { Component } from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import { HUMAN, BOT } from "../../constants";
import "../../App.css";
import SpeechRecognition from "react-speech-recognition";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

class InputComponent extends Component {
  state = {
    value: "",
    listening: false,
    modalOpen: false,
  };

  textInput = React.createRef();

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = (type) => {
    this.props.setConversation((prev) => [
      ...prev,
      {
        value: this.state.value,
        author: type ? HUMAN : BOT,
        time: new Date().getTime(),
      },
    ]);
    this.props.resetTranscript(true);
    this.setState({
      value: "",
    });
    this.textInput.current.focus();
  };

  handleListen = () => {
    this.setState({
      listening: !this.state.listening,
    });
    if (!this.state.listening) {
      this.props.startListening(true);
    } else {
      this.props.stopListening(false);
    }
  };

  componentWillReceiveProps() {
    this.setState({
      value: this.props.transcript,
    });
  }

  render() {
    const { browserSupportsSpeechRecognition } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <TextField
          variant="outlined"
          label="Enter Text Here"
          value={this.state.value}
          onChange={this.handleChange}
          multiline
          autoFocus
          inputRef={this.textInput}
          style={{ theme: { primary: "red" } }}
          className="input"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.handleListen}>
                  {!this.state.listening ? (
                    <MicIcon color="primary" />
                  ) : (
                    <MicOffIcon color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={this.state.value === ""}
          className="button"
          onClick={() => this.handleClick(1)}
        >
          Send Human
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={this.state.value === ""}
          className="button"
          onClick={() => this.handleClick(0)}
        >
          Send BOT
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={this.props.handleSave}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={this.props.reset}
        >
          Reset
        </Button>
      </div>
    );
  }
}
const options = {
  autoStart: false,
};

export default SpeechRecognition(options)(InputComponent);
