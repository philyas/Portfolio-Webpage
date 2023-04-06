import {Box, Button, Tooltip} from '@mui/material'
import {useInView} from 'framer-motion'
import {  useRef, useState } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function MobileItem({source, app, title}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})
    const [count,setCount] = useState(0)

    const scrollUp = ()=> {
        if (count !== 0) {
            setCount((current)=> current-1)
        }
    }

    const scrollDown = ()=> {
        if (count < app.length-1) {
            setCount((current)=> current+1)
        }
    }

    return(
        <div>
        
            <Box ref={ref} style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: '2s',
            }} position={'relative'} bgcolor={'green'} width={180} height={400} mt={10} >
                <img style={{position:'absolute',left:0,top:0, transform:'scale(1.2)', filter:'drop-shadow(0 4px 2px black)'}} alt='src' src={source}></img>
                <Box style={{overflow:'hidden', position:'absolute',left:0,top:0, width:'204px', height:'395px' , borderRadius:'1rem' }} >
                        {app.map((img,index)=> <img key={index} style={{transition:'1s', borderRadius:'1rem' , position:'absolute', left:0, transform: `translateY(${index*395-(count*395)}px)`, width:190, height:395}}   alt='app' src={img}></img> )}
                </Box>
                <Button onClick={scrollDown}><ArrowCircleDownIcon></ArrowCircleDownIcon></Button>
                <Button onClick={scrollUp}><ArrowCircleUpIcon></ArrowCircleUpIcon></Button>
            </Box>
        </div>
    )
}

export default MobileItem