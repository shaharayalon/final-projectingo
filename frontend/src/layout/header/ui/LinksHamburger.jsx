import { Fragment } from "react";
import { alwaysLinks, loggedInBusinessLinks,loggedInRegularLinks, loggedOutLinks } from "../LinksArray";
import nextKey from "generate-my-key";
import { useSelector } from "react-redux";
import NavLinkComponentHamburger from "../../../components/NavLinkComponentHamburger";

const LinksHamburger = ({onGaga}) => {
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  const handleClick=()=>{
    onGaga();
  }

  return (
    <Fragment>
      {alwaysLinks.map((link) => (
        <NavLinkComponentHamburger to={link.to} key={nextKey()} onGagi={handleClick}>
          {link.children}
        </NavLinkComponentHamburger>
      ))}
      {isLoggedIn && userData.isBusiness &&
        loggedInBusinessLinks.map((link) => (
          <NavLinkComponentHamburger to={link.to} key={nextKey()} onGagi={handleClick}>
            {link.children}
          </NavLinkComponentHamburger>
        ))}
        {isLoggedIn && !userData.isBusiness &&
        loggedInRegularLinks.map((link) => (
          <NavLinkComponentHamburger to={link.to} key={nextKey()} onGagi={handleClick}>
            {link.children}
          </NavLinkComponentHamburger>
        ))}
      {!isLoggedIn &&
        loggedOutLinks.map((link) => (
          <NavLinkComponentHamburger to={link.to} key={nextKey()} onGagi={handleClick}>
            {link.children}
          </NavLinkComponentHamburger>
        ))}
    </Fragment>
  );
};

export default LinksHamburger;
