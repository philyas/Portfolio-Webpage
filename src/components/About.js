import classes from './About.module.css'
import {Grid , Box, Button} from '@mui/material'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function About() {
    const textRef = useRef(null)
    const textInView = useInView(textRef, {once:true})

    return (
        <div id='about'>
            <Grid container spacing={2}  mt={10} overflow={'hidden'} alignItems={'center'} justifyContent={'center'}>
        
                <Grid item lg={6}>
                    <Box     ref={textRef}
                        style={{
                            transform: textInView ? "none" : "translateX(200px)",
                            opacity: textInView ? 1 : 0,
                            transition: '1s 0.5s',
                           
                    }} mb={25} className={classes.aboutbox}>
                        <h1 className={classes.aboutme}>About Me</h1>
                        
                        <p>As a self-taught software developer, I bring a unique mix of motivation, dedication, and passion for problem-solving and innovation to every project I work on. My expertise has been acquired through a variety of online courses, tutorials, and personal projects, allowing me to build applications using technologies such as React, Node.js, MongoDB, and PostgreSQL.</p>

<p>My understanding of front-end development is well-rounded, and I am proficient in HTML, CSS, JavaScript, and CSS frameworks such as Bootstrap and Material-UI. I am always looking to improve my skills and stay up-to-date with the latest technologies, and my ability to learn quickly and my creative thinking ensure that I can accept any challenge that comes my way.</p>

<p>My personal projects include a patient management app, webpages, employee time tracker etc. Whether working independently or as part of a team, I am confident in my ability to contribute to any project and to deliver results.</p>

<p>In conclusion, I am a highly motivated self-taught software developer, enthusiastic to take on new challenges and continue my growth in this field. If you're looking for a solution-focused and innovative developer, I would be delightful to discuss how I can contribute to your project.</p>
                    
                        <a href='#contact' style={{textDecoration:'none'}}><Button style={{width:'40%', position:'relative', background:'lightblue', fontWeight:'bold'}} variant='contained' >CONTACT ME</Button></a>
                    </Box>
                </Grid>

           


            </Grid>
        </div>
    );
  }
  
  export default About;