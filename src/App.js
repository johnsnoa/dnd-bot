import "./App.css";
import CharacterForm from "./CharacterForm";
import AbilitiesForm from "./AbilitiesForm";
import { useEffect, Component } from "react";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);

    this.getName = this.getName.bind(this);

    this.state = {
      character__name: "",
    };
  }

  getName = (name) => {
    this.setState({ character__name: name });
  };

  abilitiesScreen = (e) => {
    $(".character").removeClass("form__background--visible");
    $(".abilities").addClass("form__background--visible");
    e.preventDefault();
  };

  componentDidMount() {
    $(".character").addClass("form__background--visible");
  }
  render() {
    return (
      <div className="App">
        <AbilitiesForm />
        <CharacterForm getName={this.getName} onSubmit={this.abilitiesScreen} />
      </div>
    );
  }
}

export default App;
