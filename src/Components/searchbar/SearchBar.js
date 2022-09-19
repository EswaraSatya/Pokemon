import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "6px",
  borderRadius: "50px",
  backgroundColor: "#eeeeee",
  "&:hover": {
    backgroundColor: "#e3f2fd",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 28),
  color: "#00b0ff",
  height: "80%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#616161",
  //   backgroundColor:"transparent",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));
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
const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#fafafa",
      main: "#fafafa",
      dark: "#00000",
      contrastText: "#9e9e9e",
    },
  },
});

export default function TopBar(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
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
            <AppBar style={{ height: "70px" }}>
              <Toolbar>
                <Search onChange={(e) => props.searchItems(e.target.value)}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>

                <Typography
                  variant="h3"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
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
            App will be ready after that completes. Main images require internet
            connection but once loaded they will be available offline.{" "}
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

        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "40%",
            }}
            color="secondary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
