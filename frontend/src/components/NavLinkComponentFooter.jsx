import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import nlcfStyle from "../css/NavLinkComponentFooter.module.css"

const NavLinkComponentFooter = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Typography
          color={isActive ? "text.warning" : "text.primary"}
           className={nlcfStyle.link}
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponentFooter;
