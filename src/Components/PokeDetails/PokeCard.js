import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../searchbar/SearchBar";
import PokeActions from "../../Redux/actions/PokeActions";
import CircularProgress from "@mui/material/CircularProgress";
import { Card, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PokeCard.scss";
import Types from "../Types/Types";

export const PokeCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pokemon = useSelector((state) => state);
  const fetchData = () => {
    fetch("https://6347aadd0484786c6e85792f.mockapi.io/PokemonData")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        dispatch(PokeActions.updatePokemonList(data));
        setIsLoading(true);
      });
  };

  const searchItems = (searchValue) => {
    setSearchText(searchValue);
    if (searchText !== "") {
      const filteredData = users.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };

  const routeChange = (id) => {
    // navigate(`/pokedetails/${id}`);
    navigate(`/pokedetails/`);

    dispatch(PokeActions.selectedPokemonList(id));
    console.log(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let newUsers = [];
  searchText.length > 0
    ? (newUsers = filteredResults)
    : (newUsers = pokemon.Records);
  return (
    <>
      <TopBar searchItems={searchItems} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "120px",
          boxSizing: "border-box",
          paddingTop: "75px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            boxSizing: "border-box",
          }}
        >
          {!isLoading ? (
            <CircularProgress
              color="primary"
              style={{
                width: "90px",
                height: "90px",
              }}
            />
          ) : (
            newUsers.map(({ id, name, url, type }) => (
              <div>
                <Card
                  className="card2"
                  style={{
                    color: "white",
                  }}
                  elevation={2}
                  key={id}
                  onClick={() => routeChange(id)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0,0,0,.125)",
                    width: "12rem",
                    height: "16.5rem",
                    padding: "0.5rem 0.3rem 0.3rem",
                    fontSize: "medium",
                    color: "grey",
                    transition: "backgroundColor 3s ease",
                    boxSizing: "border-box",
                    // boxShadow:
                    //   "5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green",
                    // transition: "backgroundColor 3s ease",
                    // boxShadow: "10px 10px 10px 10px lightblue",
                  }}
                >
                  <CardActionArea>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          flex: "0 0 75%",
                          flexGrow: 1,
                          maxWidth: "75%",
                          textAlign: "left",
                          position: "relative",
                          top: "-6px",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "1.7rem",
                            margin: 0,
                            color: "#9e9e9e",
                          }}
                        >
                          {id}
                        </h1>
                        <h1
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "#9e9e9e",
                          }}
                        >
                          {name}
                        </h1>
                      </div>
                      <Types type={type} />
                    </div>
                    <CardMedia
                      component="img"
                      height="180"
                      image={url}
                      alt="green iguana"
                      style={{
                        size: "10px",
                      }}
                    />
                  </CardActionArea>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
