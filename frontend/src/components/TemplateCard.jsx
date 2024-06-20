import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import tcStyle from "../css/TemplateCard.module.css"

const TemplateCard = ({
  _id,
  title,
  subtitle,
  image,
  alt,
  phone,
  address,
  cardNumber,
  onDelete,
  onEdit,
  onLike,
  onPhone,
  isliked,
}) => {
  const handleDeleteCardClick = () => {
    console.log("you clicked on delete card man", _id);
    onDelete(_id);
  };
  const handleEditCardClick = () => {
    console.log("you clicked on edit card hits", _id);
    onEdit(_id);
  };
  const handleLikeCardClick = () => {
    console.log("you clicked on like card hits", _id);
    onLike(_id);
  };

  const handlePhoneCardClick = () => {
    console.log("you clicked on phone card hits", _id);
    onPhone(_id);
  };
  return (
    <Box display="flex" justifyContent="center" >
      <Card className={tcStyle.card}>
        <CardActionArea>
          <CardMedia component="img" image={image} alt={alt} sx={{height:"30vh"}}></CardMedia>
          <CardHeader title={title} subheader={subtitle} />
        </CardActionArea>
        <Divider />
        <CardContent>
          <Box display="flex" flexDirection="row">
            <Typography fontWeight={700} sx={{ marginRight: "5px" }}>
              Phone:
            </Typography>
            <Typography>{phone}</Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Typography fontWeight={700} sx={{ marginRight: "5px" }}>
              Address:
            </Typography>
            <Typography>{address}</Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Typography fontWeight={700} sx={{ marginRight: "5px" }}>
              Card Number:
            </Typography>
            <Typography>{cardNumber}</Typography>
          </Box>
          <br />
          <br />
          <Box display="flex" justifyContent="space-between">
            <Box>
              <IconButton onClick={handleDeleteCardClick}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
              <IconButton onClick={handleEditCardClick}>
                <EditIcon></EditIcon>
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={handlePhoneCardClick}>
                <LocalPhoneIcon></LocalPhoneIcon>
              </IconButton>
              <IconButton onClick={handleLikeCardClick} >
                <FavoriteIcon sx={{color:isliked}}></FavoriteIcon>
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

TemplateCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  phone: PropTypes.string,
  address: PropTypes.string,
  cardNumber: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};

TemplateCard.defaultProps = {
  subtitle: "hi hi hi",
};
export default TemplateCard;
