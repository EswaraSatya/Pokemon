import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const pokedetails = useSelector((state) => state);
  console.log(pokedetails.Records);
  const darkTheme = createTheme({
    palette: {
      primary: {
        light: "#fafafa",
        main: "#81c784",
        dark: "#00000",
        contrastText: "#fff",
      },
    },
  });
  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const routeChange = () => {
    navigate("/");
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <ThemeProvider theme={darkTheme}>
          <ElevationScroll {...props}>
            <AppBar position="static" style={{ height: "70px" }}>
              <Toolbar>
                <ArrowBackIcon
                  onClick={routeChange}
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    width: "35px",
                    height: "30px",
                  }}
                />
                <Typography
                  variant="h3"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    cursor:"pointer",
                  }}
                  onClick={handleClickOpen("body")}
                >
                  PokéDex
                </Typography>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </ThemeProvider>
      </Box>
      <div>
        {" "}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Welcome to the PokéDex!
          </DialogTitle>
          <Divider />

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Open this menu anytime by clicking PokéDex
            </DialogContentText>
            <p> Preloading thumbnails for offline usage.</p>
            <p>
              App will be ready after that completes. Main images require
              internet connection but once loaded they will be available
              offline.{" "}
            </p>
            <Button>INSTALL APP</Button>
            <h3>SETTINGS</h3>
            <p>Mega Evolution Animation</p>
            <p>
              If enabled, the animation takes place once for each species after
              the base form's image has been downloaded.
            </p>
          </DialogContent>
          <Divider />

          <DialogActions style={{ marginRight: "41%" }}>
            <Button
              onClick={handleClose}
              style={{
                display: "flex",
                alignItems: "center",
              }}
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
