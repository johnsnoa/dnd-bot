import React from "react";

export default class AbilitiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character__dex: 0,
      character__str: 0,
      character__con: 0,
      character__int: 0,
      character__wis: 0,
      character__cha: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state["character__name"]);
    console.log("Class: " + this.state["character__class"]);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form__background abilities" onSubmit={this.handleSubmit}>
        <div className="form__box">
          <ul className="abilities__box">
            <li id="dex" className="abilities__base"></li>
            <li id="str" className="abilities__base"></li>
            <li id="con" className="abilities__base"></li>
            <li className="abilities__base"></li>
            <li className="abilities__base"></li>
            <li className="abilities__base"></li>
          </ul>
        </div>
      </form>
    );
  }
}
