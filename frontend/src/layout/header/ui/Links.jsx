import { Fragment } from "react";
import { alwaysLinks, loggedInBusinessLinks,loggedInRegularLinks, loggedOutLinks } from "../LinksArray";
import NavLinkComponent from "../../../components/NavLinkComponent";
import nextKey from "generate-my-key";
import { useSelector } from "react-redux";

const Links = ({onGaga}) => {
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  return (
    <Fragment>
      {alwaysLinks.map((link) => (
        <NavLinkComponent to={link.to} key={nextKey()} >
          {link.children}
        </NavLinkComponent>
      ))}
      {isLoggedIn && userData.isBusiness &&
        loggedInBusinessLinks.map((link) => (
          <NavLinkComponent to={link.to} key={nextKey()} >
            {link.children}
          </NavLinkComponent>
        ))}
        {isLoggedIn && !userData.isBusiness &&
        loggedInRegularLinks.map((link) => (
          <NavLinkComponent to={link.to} key={nextKey()} >
            {link.children}
          </NavLinkComponent>
        ))}
      {!isLoggedIn &&
        loggedOutLinks.map((link) => (
          <NavLinkComponent to={link.to} key={nextKey()} >
            {link.children}
          </NavLinkComponent>
        ))}
    </Fragment>
  );
};

export default Links;
