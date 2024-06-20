import ROUTES from "../../routes/ROUTES";
const LinksArray = [
  {
    to: ROUTES.HOME,
    children: "Home Page",
  },
  {
    to: ROUTES.REGISTER,
    children: "Register Page",
  },
  {
    to: ROUTES.LOGIN,
    children: "Login Page",
  },
];

const alwaysLinks = [
  {
    to: ROUTES.HOME,
    children: "Home Page",
  },
  {
    to: ROUTES.ABOUTME,
    children: "About Me",
  },
];

const loggedInBusinessLinks = [
      { to: ROUTES.MYPROFILE, children: "Profile Page" },
      { to: ROUTES.MYCARDS, children: "My Cards" },
      { to: ROUTES.CREATECARD, children: "Create Card" },
      { to: ROUTES.FAVORITESCARDS, children: "Favorites Cards" },
      { to: ROUTES.LOGOUT, children: "Logout"}
      ];
const loggedInRegularLinks = [
      { to: ROUTES.MYPROFILE, children: "Profile Page" },
      { to: ROUTES.FAVORITESCARDS, children: "Favorites Cards" },
      { to: ROUTES.LOGOUT, children: "Logout"}
      ];

const loggedOutLinks = [
  {
    to: ROUTES.REGISTER,
    children: "Register Page",
  },
  {
    to: ROUTES.LOGIN,
    children: "Login Page",
  },
];

export default LinksArray;
export { alwaysLinks, loggedInBusinessLinks,loggedInRegularLinks ,loggedOutLinks };
