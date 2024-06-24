import { Box, Grid, Stack } from '@mui/material'
import classes from './LinkItem.module.css'
import { useRef } from 'react';
import {useInView} from 'framer-motion'

function LinkItem({source, description, url, scale, text}) {
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
            transition: '1s 0.3s'
        }}
       className={classes.box} styles={{lg:500,xs:200}}  margin={'auto'} borderRadius={5}>
        <Grid container alignItems={'center'} justifyContent={'center'}>
           <Grid item>
                <Box alignItems={'center'} justifyContent={'center'}>
                    <Stack sx={{width:{lg:400, xs:200}}} height={150}  style={{alignItems:'center', justifyContent:'center'}}>
                        <h1 className={classes.title} style={{margin:0}}>{description}</h1>
                        <a href={url} style={{textDecoration:'none'}}><p className={classes.content} style={{margin:0, color:'black'}}>{text}</p></a>
                    </Stack>
                </Box>
           </Grid>
           <Grid item> 
                <Box sx={boxStyle} width={150} height={150} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <a href={url}><img width={'100%'} alt='icon' src={source} style={{transform:`scale(${scale})`}}></img></a>
                 </Box>
           </Grid>
        </Grid>
        </Box>
    )
}

export default LinkItem