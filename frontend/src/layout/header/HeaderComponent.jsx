import { AppBar, Box, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Links from "./ui/Links";
import { useDispatch, useSelector } from "react-redux";
import { isDarkActions } from "../../store/isDarkSlice";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import hcStyle from "../../css/HeaderComponent.module.css"
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import HamburgerMenu from "./HamburgerHeader/HamburgerMenu"


const HeaderComponent = () => {
  const navigate= useNavigate();
  const isDark = useSelector((bigPie) => bigPie.isDarkSlice.isDark);
  const dispatch = useDispatch();

  const [icon, setIcon] = useState(<ModeNightIcon />);
  const [searchInputValue, setSearchInputValue] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };
  const handleVibe=(e)=>{
    if(e.key==="Enter"){
     navigate(ROUTES.VIBE);
    }
  }
  const handleIconModeComponent = () => {
    if (!isDark) {
      dispatch(isDarkActions.changeToDark());
      setIcon(<LightModeIcon />);
    }
    if (isDark) {
      dispatch(isDarkActions.changeToLight());
      setIcon(<ModeNightIcon />);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{ width: "100vw", height: "7vh" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          height: "7vh",
          paddingRight: "2vw",
          paddingLeft: "2vw",
          width: "100vw",
        }}
      >
        <Box>
          <Typography className={hcStyle.title}>SHAHAR AYALON</Typography>
        </Box>
        <Box className={hcStyle.regularMenu}>
          <Links />
          <TextField
            type="search"
            variant="outlined"
            maxLength={20}
            size="small"
            onChange={handleSearchInputChange}
            onKeyUp={handleVibe}
            placeholder="search"
            value={searchInputValue}
            sx={{
              backgroundColor: "white",
              opacity: "0.7",
              width: "15vw",
            }}
          
          />
          </Box>
          <Box display="flex" gap="3vw">
          <IconButton onClick={handleIconModeComponent}>{icon}</IconButton>
          <HamburgerMenu />
        </Box>
      </Box>
    </AppBar>
  );
};

export default HeaderComponent;
