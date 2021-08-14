import './App.css';
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":"annoyance"
};

const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Emoji not found");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Detector</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        className="input-element"
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="emoji"
          >
            {emoji}
          </span>
        ))
      }
    </div>
  );
}

export default App;
