import React from "react";

const CharacterForm = (props) => {
  return (
    <form
      className={`form__background character ${
        !props.visibility && "form__background--visible"
      }`}
      onSubmit={(event) =>
        props.onSubmit(event, {
          name: event.target.character__name.value,
          race: event.target.character__race.value,
        })
      }
    >
      <div className="form__box">
        <label to="character__name">Character Name</label>
        <input
          type="text"
          className="character__name"
          name="character__name"
          spellCheck="false"
          required
        />
        <br className="form__break" />
        <label to="character__race">Character Race</label>
        <select
          className="character__race"
          name="character__race"
          placeholder=""
          required
        >
          <option value="">Select one</option>
          <option value="Human">Human</option>
          <option value="Aasimar">Aasimar</option>
          <option value="Warforged">Warforged</option>
          <option value="Yuan-ti">Yuan-Ti Pureblood</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Triton">Triton</option>
          <option value="Goliath">Goliath</option>
          <option value="Tabaxi">tabaxi</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Half-elf">Half-Elf</option>
          <option value="Lizardfolk">Lizardfolk</option>
          <option value="Gnome">Gnome</option>
          <option value="Genasi">Genasi</option>
          <option value="Aarakocra">Aarakocra</option>
          <option value="Elf">Elf</option>
          <option value="Tiefling">Tiefling</option>
          <option value="Bugbear">Bugbear</option>
          <option value="Kenku">Kenku</option>
          <option value="Githyanki">Githyanki</option>
          <option value="Tortle">Tortle</option>
        </select>
        <input type="submit" value="Next" />
      </div>
    </form>
  );
};

export default CharacterForm;

// export default class CharacterForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       character__name: "",
//       character__class: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.props.getName(event.target.value);
//   }

//   handleSubmit(event) {
//     alert(this.state.character__name);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form
//         className="form__background character"
//         onSubmit={this.props.onSubmit}
//       >
//         <div className="form__box">
//           <label to="character__name">Character Name</label>
//           <input
//             type="text"
//             className="character__name"
//             name="character__name"
//             value={this.props["character__name"]}
//             onChange={(event) => this.handleChange(event)}
//             spellCheck="false"
//           />
//           {/* <select
//             className="character__class"
//             name="character__class"
//             value={this.state["character__class"]}
//             onChange={this.handleChange}
//             required
//           >
//             <option value=""></option>
//             <option value="artificer">Artificer</option>
//             <option value="barbarian">Barbarian</option>
//             <option value="bard">Bard</option>
//             <option value="cleric">Cleric</option>
//             <option value="druid">Druid</option>
//             <option value="fighter">Fighter</option>
//             <option value="monk">Monk</option>
//             <option value="paladin">Paladin</option>
//             <option value="ranger">Ranger</option>
//           </select> */}
//           <input type="submit" value="Next" />
//         </div>
//       </form>
//     );
//   }
// }
