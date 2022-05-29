import "./App.css";
import CharacterForm from "./CharacterForm";
// import AbilitiesForm from "./AbilitiesForm";
import React, { useState } from "react";
// import $ from "jquery";

export default function App() {
  const [characterInfo, setCharacterInfo] = useState({
    info: { name: "", race: "" },
  });
  //const [characterInfoSet, markCharacterInfoSet] = useState(false);

  const handleCharacterInfo = (event, info) => {
    setCharacterInfo({ info });
    //markCharacterInfoSet(true);
    event.preventDefault();
  };

  return (
    <div className="app">
      <CharacterForm visibility={false} onSubmit={handleCharacterInfo} />
      <p>
        Your character is: {characterInfo.info["name"]}{" "}
        {characterInfo.info["name"] && "the"} {characterInfo.info["race"]}
      </p>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.getName = this.getName.bind(this);

//     this.state = {
//       character__name: "",
//     };
//   }

//   getName = (name) => {
//     this.setState({ character__name: name });
//   };

//   abilitiesScreen = (e) => {
//     $(".character").removeClass("form__background--visible");
//     $(".abilities").addClass("form__background--visible");
//     e.preventDefault();
//   };

//   componentDidMount() {
//     $(".character").addClass("form__background--visible");
//   }
//   render() {
//     return (
//       <div className="App">
//         <AbilitiesForm />
//         <CharacterForm getName={this.getName} onSubmit={this.abilitiesScreen} />
//       </div>
//     );
//   }
// }
