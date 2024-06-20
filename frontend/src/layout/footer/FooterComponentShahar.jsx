import { AppBar, Box} from "@mui/material";

import FooterLinks from "../header/ui/FooterLinks";


const FooterComponentShahar = () => {
   return (
    <AppBar
      position="sticky"
      sx={{ width: "100vw", height: "7vh",marginTop:"5vh" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "7vh",
          paddingRight: "2vw",
          paddingLeft: "2vw",
          width: "100vw",
        }}
      >
        <FooterLinks/>
      </Box>
    </AppBar> 
  );
};

export default FooterComponentShahar;
