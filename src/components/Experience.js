import {Grid , Box, Button} from '@mui/material'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Profile from './Profile'
import {useTheme} from '@mui/material'
import {useMediaQuery} from '@mui/material'
import code1 from './assets/code1.png'
import code2 from './assets/code2.png'
import classes from './Experience.module.css'


export default function Experience() {
    const textRef = useRef(null)
    const imageRef = useRef(null)
    const textInView = useInView(textRef, {once:true})
    const imageInView = useInView(imageRef, {once:true})


    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div id='experience' className={classes.header}>
                 <h1 style={{color:'#463b8a', textAlign:'center'}}>Experience</h1>
            <Grid  container spacing={1}  overflow={'hidden'} alignItems={'center'} justifyContent={'center'}>

                <Grid item lg={6}>
                    <Box ref={imageRef} sx={{ 
                           width: {xl:700, lg:550, md:600, sm:400,xs:250},
                           position:'relative',
                            opacity: imageInView ? 1 : 0, transition: '2s'}}>
                                
                         <img style={{width:'100%', zIndex:2,position:'absolute', filter:'drop-shadow(10px 20px 8px black)',  left:'30%', bottom:'30%'}} src={code1}></img>
                         <img style={{width:'100%',filter:'drop-shadow(10px 20px 8px black)'}} src={code2}></img>
                    </Box>
                </Grid>

                <Grid item lg={6}>
                    <Box     ref={textRef}
                        style={{
                            transform: textInView ? "none" : "translateX(100px)",
                            opacity: textInView ? 1 : 0,
                            transition: '1s',
                            padding:20,
                    }}  className={classes.aboutbox}>
                   
                        <p>
                        <span style={{fontWeight:'bold'}}>Front-End Development:</span> Utilizing HTML, CSS, JavaScript, and frameworks such as Bootstrap and Material-UI to create responsive and user-friendly interfaces.
                        </p>
                        <p>
                        <span style={{fontWeight:'bold'}}>Back-End Development:</span>  Building and maintaining server-side logic using Node.js and Express.js, and managing databases with MongoDB and PostgreSQL.
                            </p>
                            <p>
                            <span style={{fontWeight:'bold'}}>API-Integration:</span>  Developing and integrating RESTful APIs to connect front-end and back-end components, ensuring seamless data flow and functionality.
                            </p>
                            <p>
                            <span style={{fontWeight:'bold'}}>Code-Review and Testing:</span>  Conducting code reviews, writing unit tests, and performing debugging to ensure code quality and performance.
                            </p>
                            <p>
                            <span style={{fontWeight:'bold'}}>Collaboration:</span> : Working closely with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software solutions on time.
                            </p>
                 
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
  }
  
