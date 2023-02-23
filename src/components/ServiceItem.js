import { Box, Stack,  } from "@mui/material"
import classes from './ServiceItem.module.css'
import { useRef } from "react"
import {useInView} from 'framer-motion'


function ServiceItem({source, scale, title, description}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    return(
        <div>
            <Box    
            ref={ref}
              sx={{
                position:'relative',
                transform: isInView ? 'none':'translateY(20%)',
                opacity: isInView ? 1 : 0,
                transition: '0.4s',
                bottom:0,
                '&:hover':{
                    bottom:'20px'
                }
              }}
       className={classes.box} width={280} height={520} borderRadius={5} p={1}>
                <Box><img style={{transform:`scale(${scale})`}}  width={'100%'} height={250} alt="img" src={source}></img></Box>
                <Box  className={classes.description} boxSizing={'border-box'} width={'100%'} height={200} p={1}>
                    <Stack className={classes.stack}>
                        <h1 style={{margin:'auto'}}>{title}</h1>
                         <p>{description}</p>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default ServiceItem