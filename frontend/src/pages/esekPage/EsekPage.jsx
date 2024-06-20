import { Fragment, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import epStyle from "../../css/EsekPage.module.css"

const EsekPage = () => {
  const { id } = useParams();
  const [cardInfo, setCardInfo] = useState([]);
  const [mapInfo, setMapInfo]= useState(`https://www.google.com/maps/embed/v1/place?q=bialik+4,+givat+shmuel,+israel&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`);
  useEffect(() => {
    axios
      .get(`cards/${id}`)
      .then(({ data }) => {
        setCardInfo(data);
        let city= data.address.city.replace(/ /g, '+');
        setMapInfo(`https://www.google.com/maps/embed/v1/place?q=${data.address.street}+${data.address.houseNumber},+${city}+${data.address.state}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`)
  
      })
      .catch((err) => {
        console.log("error  is: ", err);
      });
  }, []);
  return (
    <Fragment>
      
      <Box className={epStyle.container} >
        <Box className={epStyle.mapContainer}>
        <iframe className={epStyle.map} frameborder="0" src={mapInfo}></iframe>
        </Box>
        <Box className={epStyle.detailsContainer} >
          <Box>
             <Typography variant="h1" className={epStyle.title}>פרטי העסק</Typography>
          </Box>
         <Box className={epStyle.onlyDetails}>
          <Typography variant="h4" className={epStyle.subtitle}>
            שם העסק : {cardInfo.title}
          </Typography>
          {/* <Typography variant="h4">
            {cardInfo.title}
          </Typography> */}
           <Typography variant="h4" className={epStyle.subtitle}>
            אימייל : {cardInfo.email}
          </Typography>
          {/* <Typography variant="h4" color="initial">
            {cardInfo.email}
          </Typography> */}
           {/* <Typography variant="h4">
            כתובת:
          </Typography>
          <Typography variant="h4" color="initial">
            {cardInfo?.address?.street} {cardInfo?.address?.houseNumber} {cardInfo?.address?.city}, {cardInfo?.address?.state}
          </Typography> */}
           <Typography variant="h4" className={epStyle.subtitle}>
            טלפון: {cardInfo.phone}
          </Typography>
          {/* <Typography variant="h4" color="initial">
            {cardInfo.phone}
          </Typography> */}
           <Typography variant="h4" className={epStyle.subtitle}>
            אתר בית העסק: {cardInfo.web}
          </Typography>
          {/* <Typography variant="h4" color="initial">
            {cardInfo.web}
          </Typography> */}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default EsekPage;
