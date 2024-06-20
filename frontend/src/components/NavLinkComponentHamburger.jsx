import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponentHamburger = ({ to, children, onGagi }) => {
  const handleClick=()=>{
    onGagi();
  }
  return (
    <NavLink to={to} style={{ textDecoration: "none" }} onClick={handleClick}>
      {({ isActive }) => (
        <Typography
          sx={{ padding: 2 }}
          color={isActive ? "text.warning" : "text.primary"}
          
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponentHamburger;
