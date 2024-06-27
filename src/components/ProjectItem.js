import classes from './ProjectItem.module.css'
import {Box , Button, Modal, Stack, Tooltip} from '@mui/material'
import { useState, useRef, useEffect,  } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useContext } from 'react';
import {ContextData} from './CountContext/CountContext'
import { useInView} from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close';


function ProjectItem({source,images,title, description, url, stacks}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const context = useContext(ContextData)
     const [count,setCount] = context

    const [imgWidth, setImgWidth] = useState()

     useEffect(() => {
        imgWidth()
        
       const handleWindowResize = () => {
          imgWidth()
       };

       function imgWidth() {
        if (window.innerWidth > 900) {
          setImgWidth(800)
        }
        else if (window.innerWidth  > 600) {
          setImgWidth(600)
        }
        else if (window.innerWidth  > 0) {
          setImgWidth(430)
        }
        else {
          setImgWidth(1000)
        }
       }
  
       window.addEventListener('resize', handleWindowResize);
   
       return () => {
         window.removeEventListener('resize', handleWindowResize);
       };
     });

    
    const [open,setOpen] = useState(false)

    const handleClose = ()=> {
        setOpen(false)
        setCount(0)
    
    }

    const openHandler = ()=> {
      setCount(0)
      setOpen(true)
 
    }

    const modalStyle={
        position:'absolute',
          width:{
            xs:430,
            sm:600,
            md:800,
            lg:900
          },
          height:{
            xs:650,
            sm:800
          },
          background:'white',
          margin:'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          borderRadius:'0.1rem',
          filter:'drop-shadow(0 0 2px gray)',
          textAlign:'center',
          outline:0
      }
  
      const boxStyle = {
        position:'relative',
        width:{
          xs:430,
          sm:600,
          md:800,
        },
        margin:'auto',
      }

      const itemStyle = {
        filter:'brightness(100%)',
        opacity:1,
        width:'100%',
        '&:hover': {
          filter:'brightness(50%)',
          opacity:0.4
        },
        position:'relative', bottom:'0rem',  transition:'0.5s',
      }

      const swipeLeft = ()=> {
          if (count !== 0) {
            setCount((count)=> count-1)
          }
      }

      const swipeRight=()=> {
          if (count < images.length-1) {
            setCount((count)=> count+1)
          }
      }

    return(
      
            <div>
                  <Box
                  style={{
                    position:'relative',
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: '1s',
                    overflow:'hidden'
                  }}

                ref={ref} onClick={openHandler} className={classes.box} sx={{ position:'relative', 
                width:{xs:300, sm:500, lg:600}
                , height:{md:275, lg:327}}}   alignItems={'center'} justifyContent={'center'}>
                    <h1 style={{margin:0, color:'white', textShadow:'0 0 7px  black', position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)'}}>View Project</h1>
                  <Box sx={itemStyle} >
                     <img className={classes.boximg} alt='projectitem' width={'100%'} height={'auto'} src={source}></img>
                  </Box>
          
                </Box>
  
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
     
            <Box sx={modalStyle}>
                <CloseIcon onClick={handleClose} sx={{position:'absolute', background:'lightgray','&:hover':{background:'gray'}, padding:0.6,borderRadius:'10%', right:'1.5rem', top:'1.3rem'}}></CloseIcon>
                <h1 className={classes.modalheader} >{title}</h1>
                <p style={{color:'gray'}}>Click &#x2190; and &#x2192; to navigate</p>
                <Box sx={boxStyle}>

                <Button style={{ zIndex:2, color:'white', position:'absolute', boxShadow:'0 0 4px gray', borderColor:'white',border:'1px', borderStyle:'solid', left:'2%',top:'50%',transform:'translateY(-50%)', background:'transparent'}} onClick={swipeLeft}><ArrowBackIosIcon style={{filter:'drop-shadow(0 0 1px gray)'}} fontSize='large'></ArrowBackIosIcon></Button>
                        <Button style={{zIndex:2, color:'white',border:'1px',boxShadow:'0 0 4px gray',  borderStyle:'solid', borderColor:'white', position:'absolute', right:'2%',top:'50%',transform:'translateY(-50%)', background:'transparent'}} onClick={swipeRight}><ArrowForwardIosIcon style={{filter:'drop-shadow(0 0 1px gray)'}}  fontSize='large' ></ArrowForwardIosIcon></Button>

                    <Box style={{width:'100%',height:'auto', display:'flex',overflow:'hidden'}}>
                        <Box sx={{ display:'flex',
                        transform:{ 
                          xs:`translateX(-${boxStyle.width.xs * count}px)`, 
                          sm:`translateX(-${boxStyle.width.sm * count}px)`, 
                          md:`translateX(-${boxStyle.width.md * count}px)`, 
                          lg:`translateX(-${boxStyle.width.lg * count}px)`,      
                        },
                        position:'relative', transition:'1s'}}>  
                          {images.map((image, index)=>                       
                          <img key={index} width={imgWidth} height={'auto'} style={{  borderRadius:'0.05rem',filter:'drop-shadow(0 0 4px gray)'}} alt="project" src={image}></img>    )}             
                        </Box>
                    </Box>    
                </Box>
                   <p className={classes.text}>{description}</p>
                {url === "empty" ? null : <a href={url} style={{textDecoration:'none'}} rel={'noreferrer'} target={'_blank'}><Button variant='outlined' >Project Link</Button></a> }
                   <Stack  style={{position:'relative', marginTop:'2%'}} flexDirection={'row'} justifyContent={'center'}>
                    {stacks.map((logo,index)=> <Box key={index} mx={1} style={{position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}} boxShadow={2} bgcolor={'white'} borderRadius={'100%'} width={60} height={60}><img width={30}  height={40} alt={'logo'+index} src={logo}></img></Box> )}
                    </Stack>
            </Box>
          </Modal>
            </div>
  

    )
}

export default ProjectItem