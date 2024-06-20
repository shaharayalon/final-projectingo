import {Box, Typography} from "@mui/material"
import vStyle from "../../css/Vibe.module.css"


const Vibe=()=>{


    return (
        <Box className={vStyle.vibeContainer}>
            <Typography variant="h1" color="purple" className={vStyle.vibeText}>לזכר אור בן שמחה שהיה מלך ועדיין מלך</Typography>
        </Box>
    )
}


export default Vibe;