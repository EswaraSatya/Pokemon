import React from "react";
import "../PokeDetails/PokeCard.scss";

const Types = ({ type }) => {
  const getTypeClassName = (type) => {
    switch (type) {
      case "Grass":
        return "grass-type";
      case "Poison":
        return "poison-type";
      case "Fire":
        return "fire-type";
      case "Water":
        return "water-type";
      case "Bug":
        return "bug-type";
      case "Flying":
        return "flying-type";
      case "Electric":
        return "electric-type";
      case "Ground":
        return "ground-type"; // Add Ground type
      case "Fairy":
        return "fairy-type"; // Add Fairy type
      case "Fighting":
        return "fighting-type"; // Add Fighting type
      case "Psychic":
        return "psychic-type"; // Add Psychic type
      case "Rock":
        return "rock-type"; // Add Rock type
      case "Steel":
        return "steel-type"; // Add Steel type
      case "Ice":
        return "ice-type"; // Add Ice type
      case "Ghost":
        return "ghost-type"; // Add Ghost type
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        flex: "0 0 25%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: "100%",
        alignItems: "flex-end",
        gap: "4px",
      }}
    >
      {type[0] === "Grass" || type[1] === "Grass" ? (
        <div className={`type-icon ${getTypeClassName("Grass")}`}>
          <img
            className="grass"
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/grass.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Poison" || type[1] === "Poison" ? (
        <div className={`type-icon ${getTypeClassName("Poison")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/poison.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Fire" || type[1] === "Fire" ? (
        <div className={`type-icon ${getTypeClassName("Fire")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fire.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Water" || type[1] === "Water" ? (
        <div className={`type-icon ${getTypeClassName("Water")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/water.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Bug" || type[1] === "Bug" ? (
        <div className={`type-icon ${getTypeClassName("Bug")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/bug.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Flying" || type[1] === "Flying" ? (
        <div className={`type-icon ${getTypeClassName("Flying")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/flying.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Electric" || type[1] === "Electric" ? (
        <div className={`type-icon ${getTypeClassName("Electric")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/electric.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Ground" || type[1] === "Ground" ? (
        <div className={`type-icon ${getTypeClassName("Ground")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/ground.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Fairy" || type[1] === "Fairy" ? (
        <div className={`type-icon ${getTypeClassName("Fairy")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fairy.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Fighting" || type[1] === "Fighting" ? (
        <div className={`type-icon ${getTypeClassName("Fighting")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fighting.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Psychic" || type[1] === "Psychic" ? (
        <div className={`type-icon ${getTypeClassName("Psychic")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/psychic.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Rock" || type[1] === "Rock" ? (
        <div className={`type-icon ${getTypeClassName("Rock")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/rock.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Steel" || type[1] === "Steel" ? (
        <div className={`type-icon ${getTypeClassName("Steel")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/steel.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Ice" || type[1] === "Ice" ? (
        <div className={`type-icon ${getTypeClassName("Ice")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/ice.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0] === "Ghost" || type[1] === "Ghost" ? (
        <div className={`type-icon ${getTypeClassName("Ghost")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/ghost.png"
            alt="icon hover"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Types;
