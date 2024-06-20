import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import amStyle from "../../css/AboutMe.module.css"


const AboutMe = () => {
  return (
    <Fragment>
      <Box className={amStyle.container}>
        <Typography variant="h2" className={amStyle.title}>שלום וברוך הבא לאתר שלי!</Typography>
        <Typography variant="h4" className={amStyle.subtitle}>קודם כל נגיד שמדובר באפליקציית ווב שכוללת מערכת ניהול אתר שמאפשרת למשתמשים עסקיים לפרסם תוכן. ולסתם משתמשים ואנשים להיחשף למגוון העסקים הפעילים שלנו. נשבע.</Typography>
        <img src={require("./assets/images/toesekDetails11.png")} alt="register page 1" className={amStyle.image} />
        <img src={require("./assets/images/esekDetails12.png")} alt="register page 1" className={amStyle.image} />        
        <Typography variant="h3" className={amStyle.subtitle}>איך זה עובד:</Typography>
        <Typography variant="h4" className={amStyle.subtitle}>נרשמים</Typography>
        <img src={require("./assets/images/registerPage1.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>סימון האם אתה בעל עסק לפרסום או משתמש רגיל</Typography>
        <img src={require("./assets/images/isBussinessRegister.png")} alt="is bussiness 2" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>ואז מתחברים</Typography>
        <img src={require("./assets/images/login3.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h3" className={amStyle.subtitle}>פתאום האפשרויות פתוחות:</Typography>
        <Typography variant="h4" className={amStyle.subtitle}>אפשר לסמן בלייק את העסקים המעניינים</Typography>
        <img src={require("./assets/images/likeCard4.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>לבטל לייק אם די כבר</Typography>
        <img src={require("./assets/images/dislikeCard5.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>לראות את הכרטיסים האהובים</Typography>
        <img src={require("./assets/images/favoriteCards6.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h3" className={amStyle.subtitle}>ואם מדובר במשתמש עסקי כנזכר אז אשכרה אפשר:</Typography>
        <Typography variant="h4" className={amStyle.subtitle}>ליצור כרטיסים עסקיים משלך</Typography>
        <img src={require("./assets/images/createCard7.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>לערוך את הכרטיסים הקיימים שלך</Typography>
        <img src={require("./assets/images/toEditCard8.png")} alt="register page 1" className={amStyle.image} />
        <img src={require("./assets/images/editCard9.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>למחוק כרטיס עסקי אם הברירה כבר איננה </Typography>
        <Typography variant="h4" className={amStyle.subtitle}>(משתתף בצער, בקשת rest in peace)</Typography>
        <img src={require("./assets/images/deleteCard10.png")} alt="register page 1" className={amStyle.image} />
        <Typography variant="h4" className={amStyle.subtitle}>ודי זהו :)</Typography>  
        <Typography variant="h6" className={amStyle.subtitle}>אה ויש עוד מחווה, אם תחפשו תמצאו. אמן</Typography>
         
        
        <Typography variant="h3" className={amStyle.subtitleVibe}>בקיצור, כל העסקים פורחים פה ומי שרוצה לקטוף יכול לקטוף. מי שרוצה לשתול יכול לשתול. וכמובן מי שירצה להתבונן בנוף הוובי ולהגיד וואו, יכול גם כן. איזה כיף!</Typography>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
