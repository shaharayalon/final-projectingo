import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import EditCardPage from "../pages/editCard/EditCardPage";
import EsekPage from "../pages/esekPage/EsekPage";
import MyCards from "../pages/my-cards/MyCards";
import FavoritesCardsPage from "../pages/favoritesCardsPage/FavoritesCardsPage";
import Logout from "../pages/logout/LogoutPage";
import CreateCardPage from "../pages/createCard/CreateCardPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import RegisterPage from "../pages/register/RegisterPage";
import Vibe from "../pages/vibe/Vibe";
import AboutMe from "../pages/aboutMe/AboutMe";


const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.ESEKDETAILS}/:id`} element={<EsekPage />} />
      <Route path={ROUTES.ABOUTME} element={<AboutMe />} />
      <Route path={ROUTES.MYCARDS} element={<MyCards />} />
      <Route path={ROUTES.CREATECARD} element={<CreateCardPage />} />
      <Route path={ROUTES.FAVORITESCARDS} element={<FavoritesCardsPage />}/>
      <Route path={ROUTES.LOGOUT} element={<Logout />}/>
      <Route path={ROUTES.MYPROFILE} element={<ProfilePage />}/>
      <Route path={ROUTES.VIBE} element={<Vibe />}/>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
