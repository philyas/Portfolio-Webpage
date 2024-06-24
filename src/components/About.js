import classes from './About.module.css'
import {Grid , Box, Button} from '@mui/material'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Profile from './Profile'
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from '@mui/material'

function About() {
    const textRef = useRef(null)
    const textInView = useInView(textRef, {once:true})

    return (
        <div id='about'>
            <Grid container height={'100vh'} spacing={2}  overflow={'hidden'} alignItems={'center'} justifyContent={'center'}>

                <Grid itrem lg={6}>
                    <Profile></Profile>
                </Grid>

                <Grid item lg={6}>
                    <Box     ref={textRef}
                        style={{
                            transform: textInView ? "none" : "translateX(200px)",
                            opacity: textInView ? 1 : 0,
                            transition: '1s 0.5s',
                            padding:20,
                    }}  className={classes.aboutbox}>
                        <h2 style={{color:'#463b8a', textAlign:'center'}}>About Me</h2>
                        <p>As a software developer, I bring a unique mix of motivation, dedication, and passion for problem-solving and innovation to every project I work on. My expertise has been acquired through a variety of online courses, tutorials, and personal projects, allowing me to build applications using technologies such as React, Node.js, MongoDB, and PostgreSQL.</p>

<p>My understanding of front-end development is well-rounded, and I am proficient in HTML, CSS, JavaScript, and CSS frameworks such as Bootstrap and Material-UI. I am always looking to improve my skills and stay up-to-date with the latest technologies, and my ability to learn quickly and my creative thinking ensure that I can accept any challenge that comes my way.</p>

<p>My personal projects include a patient management app, webpages, employee time tracker etc. Whether working independently or as part of a team, I am confident in my ability to contribute to any project and to deliver results.</p>
                    <Button variant='contained' sx={{background:'#463b8a'}}>
                        Contact Me
                    </Button>
                 
                    </Box>
                </Grid>

           


            </Grid>
        </div>
    );
  }
  
  export default About;