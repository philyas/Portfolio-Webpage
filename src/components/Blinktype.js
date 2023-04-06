import { motion } from "framer-motion";
import { Box } from "@mui/material";

function Blinktype() {

    const currentTextStyle = {
        height:{xs:40,md:50,lg:60, xl:80},
        background:'darkblue',
        fontWeight:'bold'
    }

    return(
    
    <motion.span style={{display:'flex', width:'2px', margin:'auto'}} 
        initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.7, repeat:Infinity, ease:'backInOut'}}
    >
        <Box sx={currentTextStyle} width={1}  bgcolor={'white'}>

        </Box>

    </motion.span>)
}

export default Blinktype;