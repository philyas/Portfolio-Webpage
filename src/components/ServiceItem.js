import { Box, Stack,  } from "@mui/material"
import classes from './ServiceItem.module.css'
import { useRef } from "react"
import {useInView} from 'framer-motion'


function ServiceItem({source, scale, title, description, Icon}) {
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
       className={classes.box} width={300} height={'auto'} borderRadius={1} p={3}>
                <Box>
                    {<Icon style={{width:150, height:150, color:'white', padding:5}}/>}
                </Box>
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