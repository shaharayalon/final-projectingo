import { Fragment, useEffect, useState } from "react";
import { Box, Typography, Grid} from "@mui/material"
import axios from "axios";
import TemplateCard from "../../components/TemplateCard";
import{useNavigate} from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import nextKey from "generate-my-key"
import {  useSelector } from "react-redux";
import { toast } from "react-toastify";
import fcStyle from "../../css/FavoriteCards.module.css"
import ErrorPage from "../errorPage/ErrorPage";





const FavoritesCardsPage = () => {
    const navigate= useNavigate();
   const userData = useSelector((bigPie) => bigPie.authSlice.userData);
    const [cardsDetailsArr, setCardsDetailsArr] = useState([]);
    const [theCardsLikesArr, setCardsLikesArr] = useState([]);
        const [like, setLike] = useState(false);
    const [likeColorCheck,setLikeColorCheck]=useState({});
    useEffect(() => {
        axios
            .get("/cards")
            .then(({ data }) => {
                setCardsDetailsArr(data);
               const likesCardsArr=[];
               for(let card of data){
                for(let like of card.likes){
                    if(like===userData._id){
                        likesCardsArr.push(card);
                        break;
                    }
                }
                
               }
               setCardsLikesArr(likesCardsArr);
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
      console.log("the deleted card error is: ", err);
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
     setLike(!like);
     for(let likeId of data.likes){
      if(likeId===userData._id){
          return;
      }
     }
          setLike(!like);
        setCardsLikesArr((cardsLikesArrCopy) =>
      cardsLikesArrCopy.filter((card) => card._id !== _id));
    } catch (err) {
      console.log("the like card error is: ", err.response.data);
      
    }
    
  };
  const handlePhoneCard = (_id) => {
    navigate(`${ROUTES.ESEKDETAILS}/${_id}`);
  };
  
  if(!userData){
    return(
    <ErrorPage/>
    )
  }
    if (!theCardsLikesArr.length) {
        return (
            <Fragment>
                <Typography variant="h1" align="center" direction="rtl">
                    אין כרטיסים בשעת הסעודה
                </Typography>
            </Fragment>
        );
    }

    return (<Fragment>
        <Box className={fcStyle.container}>
            <Typography variant="h1" className={fcStyle.title}>הכרטיסים שאהבתי</Typography>
            <Grid container spacing={2}  className={fcStyle.gridCards}>
                {theCardsLikesArr.map((card) => (
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
    </Fragment>);
};



export default FavoritesCardsPage;