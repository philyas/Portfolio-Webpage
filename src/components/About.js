import classes from './About.module.css'
import {Grid , Box, Button} from '@mui/material'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Profile from './Profile'
import {useTheme} from '@mui/material'
import {useMediaQuery} from '@mui/material'


function About() {
    const textRef = useRef(null)
    const imageRef = useRef(null)
    const textInView = useInView(textRef, {once:true})
    const imageInView = useInView(imageRef, {once:true})


    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div id='about'>
            <Grid container height={isLgUp? '100vh' : 'auto'} spacing={2}  overflow={'hidden'} alignItems={'center'} justifyContent={'center'}>

                <Grid item lg={6}>
                    <Box ref={imageRef} sx={{ 
                             marginTop:{
                                sm:7,
                                lg:0
                             },
                            opacity: imageInView ? 1 : 0, transition: '2s 0.5s'}}>
                      <Profile></Profile>
                    </Box>
                </Grid>

                <Grid item lg={6}>
                    <Box     ref={textRef}
                        style={{
                            transform: textInView ? "none" : "translateX(100px)",
                            opacity: textInView ? 1 : 0,
                            transition: '1s 1.5s',
                            padding:20,
                    }}  className={classes.aboutbox}>
                        <h2 style={{color:'#463b8a', textAlign:'center'}}>About Me</h2>
                        <p>As a software developer, I bring a unique mix of motivation, dedication, and passion for problem-solving and innovation to every project I work on. My expertise has been acquired through a variety of online courses, tutorials, and personal projects, allowing me to build applications using technologies such as React, Node.js, MongoDB, and PostgreSQL.</p>

<p>My understanding of both front-end and back-end development is well-rounded. I am proficient in HTML, CSS, JavaScript, as well as back-end technologies like Node.js, RabbitMQ, and PostgreSQL. My ability to learn quickly and my creative thinking, combined with my problem-solving mindset, ensure that I can tackle any challenge that comes my way.</p>

<p>My personal projects include a patient management app, webpages, an employee time tracker etc. Whether working independently or as part of a team, I am confident in my ability to contribute to any project and to deliver results.</p>
                     <Box sx={{display:'flex', justifyContent: isLgUp? 'left' : 'center'}}>

                     <Button variant='contained' sx={{background:'#463b8a'}}>
                        <a href="#contact">
                            Contact Me
                        </a>
                    </Button>
                     </Box>
                 
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default About;