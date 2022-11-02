import React from "react";

const Types = ({ type }) => {
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
      }}
    >
      {type[0] === "Grass" ? (
        <div
          style={{
            background: "#5fbd58",
            boxShadow: "0 0 20px #5fbd58",
            borderRadius: "100%",
            height: "31px",
            width: "32px",
            paddingBottom: "1px",
          }}
        >
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/grass.png"
            alt="icon hover"
            style={{
              // height: "60%",
              width: "66%",
              margin: "17%",
            }}
          />
        </div>
      ) : type[1] === "Grass" ? (
        <div
          style={{
            background: "#5fbd58",
            boxShadow: "0 0 20px #5fbd58",
            borderRadius: "100%",
            height: "31px",
            width: "32px",
            paddingBottom: "1px",
          }}
        >
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/grass.png"
            alt="icon hover"
            style={{
              // height: "60%",
              width: "66%",
              margin: "17%",
            }}
          />
        </div>
      ) : null}
      {type[0] === "Poison" ? (
        <div
          style={{
            background: "#b763cf",
            boxShadow: "0 0 20px #b763cf",
            borderRadius: "100%",
            height: "31px",
            width: "32px",
          }}
        >
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/poison.png"
            alt="icon hover"
            style={{
              // height: "60%",
              width: "66%",
              margin: "17%",
            }}
          />
        </div>
      ) : type[1] === "Poison" ? (
        <div
          style={{
            background: "#b763cf",
            boxShadow: "0 0 20px #b763cf",
            borderRadius: "100%",
            height: "31px",
            width: "32px",
          }}
        >
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/poison.png"
            alt="icon hover"
            style={{
              // height: "60%",
              width: "66%",
              margin: "17%",
            }}
          />
        </div>
      ) : null}
      {type[0] === "Fire" ? (
        <div
          style={{
            background: "#fba54c",
            boxShadow: "0 0 20px #fba54c",
            borderRadius: "100%",
            height: "31px",
            width: "32px",
          }}
        >
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fire.png"
            alt="icon hover"
            style={{
              // height: "60%",
              width: "66%",
              margin: "17%",
            }}
          />
        </div>
      ) : type[1] === "Fire" ? (
        <div
          style={{
            background: "#fba54c",
            boxShadow: "0 0 20px #fba54c",
            borderRadius: "100%",
            height: "31px",
            width: "32px",
          }}
        >
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fire.png"
            alt="icon hover"
            style={{
              // height: "60%",
              width: "66%",
              margin: "17%",
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Types;
