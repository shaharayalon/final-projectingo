import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TemplateCard from "../../components/TemplateCard";
import nextKey from "generate-my-key";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import hpStyle from "../../css/HomePage.module.css"





const HomePage = () => {
  const [likeColorCheck,setLikeColorCheck]=useState({});
  const [like, setLike]=useState(false);
   const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const [cardsDetailsArr, setCardsDetailsArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        setCardsDetailsArr(data);
        if(userData){
        setLikeColorCheck(userData._id);
        }
      })
      .catch((err) => {
        console.log("error  is: ", err);
      });
  }, [like, userData]);

  const handleDeleteCard = async (_id) => {
      try {
      let {data}= await axios.delete(`/cards/${_id}`);
      console.log("the deleted card data is:", data);
      toast("You deleted your card Successfully! 🥲", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCardsDetailsArr((cardsDetailsArrCopy) =>
      cardsDetailsArrCopy.filter((card) => card._id !== _id)
    );
      } catch (err) {
          toast(`${err.response.data} 🥵`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      }
  };
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };
  const handleLikeCard = async (_id) => {
    let theCard = cardsDetailsArr.filter((card)=>card._id === _id);
    try {
     let {data} = await axios.patch(`/cards/${_id}`, theCard)
     console.log("the liked card data is:", data.likes);
     setLike(!like);

    } catch (err) {
      console.log("the like card error is: ", err.response.data);
      
    }
    
  };
  const handlePhoneCard = (_id) => {
    navigate(`${ROUTES.ESEKDETAILS}/${_id}`);
  };
  

  if (!cardsDetailsArr.length) {
    return (
      <Typography variant="h1" align="center">
        NO INFO GOOD JOB
      </Typography>
    );
  }

  return (
    <Box className={hpStyle.container}>
      <Typography
        variant="h2"
        component="div"
        className={hpStyle.title}
      >
        כל העסקים שדיברנו עליהם שבוע שעבר
      </Typography>
      <Typography
        variant="h1"
        className={hpStyle.subtitle}
      >
        :פה חיים שלי
      </Typography>
      <Grid container spacing={2}>
        {cardsDetailsArr.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={nextKey()}>
            <TemplateCard
              _id={card._id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image.url}
              alt={card.image.alt}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street}, ${card.address.houseNumber}`}
              cardNumber={card.bizNumber}
              onDelete={handleDeleteCard}
              onEdit={handleEditCard}
              onLike={handleLikeCard}
              onPhone={handlePhoneCard}
              isliked={card.likes.includes(likeColorCheck)? "red" : "none"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
