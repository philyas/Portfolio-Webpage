import { Box } from '@mui/material';
import classes from './StackItem.module.css'
import { useRef } from 'react';
import {useInView} from 'framer-motion'
import { Stack, Tooltip } from '@mui/material';

function StackItem({url,color1,color2, percentage, title}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const barRef = useRef(null)
    const barInView = useInView(barRef, {once:true})

    return (
      <Stack flexDirection={'column'} spacing={2}>
        <Tooltip title={title}>
            <Box
            ref={ref}
            borderRadius={2}
            boxShadow={7}
            sx={{
                background:`linear-gradient(45deg,${color1},${color2})`, 
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: '1s'
            }}
            padding={3}
            width={100} 
            height={100} 
            >
                <img className={classes.icon} width={'100%'} height={'auto'} alt='stack' src={url}></img>
            </Box>
        </Tooltip>
            <Box  position={'relative'}  boxShadow={5} width={100} height={10} bgcolor={'white'}>
                <Box 
            
                ref={barRef} position={'absolute'} left={0} height={10}
                sx={{
                    width: barInView ? percentage : 0,
                    transition:'2s',
                    bgcolor: percentage > 50 ? 'lime' : 'orange'
                 }}
                 
                ></Box>
            </Box>
      </Stack>
    );
  }
  
  export default StackItem;