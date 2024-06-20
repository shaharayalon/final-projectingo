import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }} >
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

export default NavLinkComponent;
