import * as React from "react";

import { useSelector } from "react-redux";
import { CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import "./PokeCard.scss";
import Header from "../Header/Header";

export const DetailPage = (props) => {
  const [data, setData] = React.useState("");

  const pokedetails = useSelector((state) => state);
  console.log(pokedetails.Records);

  let { id } = useParams();
  // case1:For getting the id based on the records and using the same value for array destructuring
  React.useEffect(() => {
    //  let id = window.location.pathname.split("/").pop();
    //  console.log(id)
    // same as case1
    console.log(id);
  }, [id]);

  console.log(pokedetails);

  return (
    <div>
      <Header />
      {pokedetails.Records.map((results, index) =>
        // data == index ? ( // by query params
        pokedetails.selectedRecords === index + 1 ? ( // by redux update
          <>
            <h1 className="pokename">{results.name}</h1>
            <span className="poketype">{results.pokemontype}</span>
            <div className="pokedetailsection">
              <div></div>
              <CardMedia
                component="img"
                image={results.url}
                alt="green iguana"
                style={{
                  height: "45%",
                  width: "41%",
                }}
              />
            </div>
          </>
        ) : null
      )}
    </div>
  );
};
