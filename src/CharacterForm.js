import React from "react";

export default class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character__name: "",
      character__class: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.getName(event.target.value);
  }

  handleSubmit(event) {
    alert(this.state.character__name);
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="form__background character"
        onSubmit={this.props.onSubmit}
      >
        <div className="form__box">
          <label to="character__name">Character Name</label>
          <input
            type="text"
            className="character__name"
            name="character__name"
            value={this.props["character__name"]}
            onChange={(event) => this.handleChange(event)}
            spellCheck="false"
          />
          {/* <select
            className="character__class"
            name="character__class"
            value={this.state["character__class"]}
            onChange={this.handleChange}
            required
          >
            <option value=""></option>
            <option value="artificer">Artificer</option>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
          </select> */}
          <input type="submit" value="Next" />
        </div>
      </form>
    );
  }
}
