import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch } from "react-redux";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import TopBar from "../searchbar/SearchBar";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import PokeActions from "../../Redux/actions/PokeActions";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

export const PokeCard = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const driver = useSelector((state) => state.PokeReducer);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const fetchData = () => {
    fetch("https://62959421810c00c1cb6350cb.mockapi.io/PokemonData")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        dispatch(PokeActions.updatePokemonList(data));
        console.log(driver, "id");

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

  useEffect(() => {
    fetchData();
    dispatch(PokeActions.updatePokemonList());
  }, []);

  let newUsers = [];
  if (searchText.length > 0) {
    newUsers = filteredResults;
  } else {
    newUsers = users;
  }
  const clickHandler = () => {
    console.log(newUsers, "id");
  };

  return (
    <>
      <TopBar searchItems={searchItems} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "75px",
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
            newUsers.map((results) => (
              <div>
                <Paper
                  style={{
                    backgroundColor: isHovering ? "#f5f5f5" : "",
                    color: isHovering ? "white" : "",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  elevation={2}
                  key={results.id}
                  onClick={() => clickHandler(results.id)}
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
                        {results.id}
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
                        {results.name}
                      </h1>
                    </div>
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
                      {/* <EnergySavingsLeafIcon
                        style={{
                          size: "large",
                          color: "green",
                          boxShadow: "rgb(95, 189, 88) 0px 0px 20px",
                          height: "30px",
                          width: "30px",
                          marginRight: "2px",
                          marginTop: "4px",
                          borderRadius: "100%",
                          opacity: "100",
                        }}
                      /> */}
                      {/* <CardMedia
                        component="img"
                        image="https://pokedex.hybridshivam.com/assets/type-icons/png/grass.png"
                        style={{
                          background: "#5fbd58",
                          boxShadow: "0 0 20px #5fbd58",
                          borderRadius: "50%",
                          height: "30px",
                          width: "30px",
                          transition: "all .2s",
                          boxSizing: "border-box",
                        }}
                      /> */}
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
                      {/* <div
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
                      </div> */}
                    </div>
                  </div>
                  <CardMedia
                    component="img"
                    height="180"
                    image={results.url}
                    alt="green iguana"
                    style={{
                      size: "10px",
                    }}
                  />
                </Paper>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
