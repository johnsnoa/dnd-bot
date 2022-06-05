import "./App.css";
import CharacterForm from "./CharacterForm";
import LevelForm from "./LevelForm.jsx";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [characterInfo, setCharacterInfo] = useState({
    info: { name: "", race: "" },
  });

  const handleCharacterInfo = (event, info) => {
    setCharacterInfo({ info });
    event.preventDefault();
  };

  return (
    <div className="app">
      <CharacterForm onSubmit={handleCharacterInfo} />
      <LevelForm onSubmit={() => {}} />
      <p>
        Your character is: {characterInfo.info["name"]}{" "}
        {characterInfo.info["name"] && "the"} {characterInfo.info["race"]}
      </p>
    </div>
  );
}
