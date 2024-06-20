import { Fragment } from "react";
import { alwaysLinks, loggedInBusinessLinks,loggedInRegularLinks, loggedOutLinks } from "../LinksArray";
import nextKey from "generate-my-key";
import { useSelector } from "react-redux";
import NavLinkComponentFooter from "../../../components/NavLinkComponentFooter";

const FooterLinks = () => {
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  return (
    <Fragment>
      {alwaysLinks.map((link) => (
        <NavLinkComponentFooter to={link.to} key={nextKey()}>
          {link.children}
        </NavLinkComponentFooter>
      ))}
      {isLoggedIn && userData.isBusiness &&
        loggedInBusinessLinks.map((link) => (
          <NavLinkComponentFooter to={link.to} key={nextKey()}>
            {link.children}
          </NavLinkComponentFooter>
        ))}
        {isLoggedIn && !userData.isBusiness &&
        loggedInRegularLinks.map((link) => (
          <NavLinkComponentFooter to={link.to} key={nextKey()}>
            {link.children}
          </NavLinkComponentFooter>
        ))}
      {!isLoggedIn &&
        loggedOutLinks.map((link) => (
          <NavLinkComponentFooter to={link.to} key={nextKey()}>
            {link.children}
          </NavLinkComponentFooter>
        ))}
    </Fragment>
  );
};

export default FooterLinks;
