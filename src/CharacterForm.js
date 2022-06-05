import React from "react";

const CharacterForm = (props) => {
  return (
    <form
      className="m-3 row"
      onSubmit={(event) => {
        document.getElementById("character-info__submit").remove();
        props.onSubmit(event, {
          name: event.target.character__name.value,
          race: event.target.character__race.value,
        });
      }}
    >
      <div className="col">
        <label className="form-label" to="character__name">
          Character Name
        </label>
        <input
          type="text"
          className="form-control"
          name="character__name"
          spellCheck="false"
          required
        />
      </div>
      <div className="col">
        <label className="form-label" to="character__race">
          Character Race
        </label>
        <select
          className="form-control"
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
      </div>
      <div className="mt-3">
        <input
          id="character-info__submit"
          className="btn btn-primary"
          type="submit"
          value="Next"
        />
      </div>
    </form>
  );
};

export default CharacterForm;
