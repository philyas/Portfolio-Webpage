import { Box, Grid, Link, Stack } from '@mui/material'
import classes from './LinkItem.module.css'
import { useRef } from 'react';
import {useInView} from 'framer-motion'

function LinkItem({source, description, url, scale, text, Icon}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const boxStyle = {
        transform:'scale(1)',
        transition:'0.2s',
        '&:hover':{
            transform:'scale(1.2)'
        }
    }

    return(
       <Box
        ref={ref}
        style={{
            opacity: isInView ? 1 : 0,
            transition: '1s 0.3s',
            padding:5,
            background:'white',
            borderRadius:12
        }}
       className={classes.box}   margin={'auto'} >
        <Grid container alignItems={'center'} justifyContent={'center'}>
           <Grid item>
                <Box alignItems={'center'} justifyContent={'center'}>
                    <Stack sx={{width:{lg:400, xs:200}}} height={200}  style={{alignItems:'center', justifyContent:'center'}}>
                        <Box sx={boxStyle} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                              <Link sx={{color:'lavender'}} href={url}> 
                                <Icon  sx={{width:100, height:100}}/>
                                    
                              </Link>
                             
                        
                        </Box>
                        <a href={url} style={{textDecoration:'none'}}><p className={classes.content}>{text}</p></a>
                    </Stack>
                </Box>
           </Grid>
           <Grid item> 
              
           </Grid>
        </Grid>
        </Box>
    )
}

export default LinkItem