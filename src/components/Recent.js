// src/components/VideoPlayer.js
import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import classes from './Recent.module.css'
import cert2 from './assets/cert2.png'
import cert3 from './assets/cert3.png'

const Recent = () => {
  return (
    <Box className={classes.header} sx={{display:'flex', marginTop:'5%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>
              Recent Project
        </h1>
          
          <Grid container alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Grid item>
          <Box className={classes.header} sx={{marginTop:'5%',flexDirection:'column', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box className={classes.card}>
            <video width="260" height="450" controls>
              <source src={'https://mystorybucket.s3.eu-central-1.amazonaws.com/1000039255.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </Box>
    </Box>
        </Grid>
        <Grid item>
            <Box className={classes.header} sx={{marginTop:'5%',flexDirection:'column', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box className={classes.card}>
                  <Box sx={{ width: 260, height: 450, background: 'linear-gradient(140deg, rgb(247, 229, 255) , rgb(37, 8, 44))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 , padding:1}}>
                        <h2>Wonder Stories</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </p>
                    </Box>
                   
                    <Box sx={{ display: 'flex', flexDirection:'column', gap:2, alignItems:'center', justifyContent: 'center', mb: 2 }}>
                   
                        <audio controls style={{width:240}}>
                          <source src="https://mystorybucket.s3.eu-central-1.amazonaws.com/ElevenLabs_2023-12-29T20_11_23_Valentino_gen_s55_sb75_m1.mp3" type="audio/ogg" />
                          <source src="https://mystorybucket.s3.eu-central-1.amazonaws.com/ElevenLabs_2023-12-29T20_11_23_Valentino_gen_s55_sb75_m1.mp3" type="audio/mpeg" />
                        </audio>
                     
                       
                    </Box>
                </Box>
              </Box>
            </Box>
        </Grid>
        <Grid item>
          <Box className={classes.header} sx={{marginTop:'5%',flexDirection:'column', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box className={classes.card}>
                  <Box sx={{width:260, height:450, background:'linear-gradient(140deg, rgb(247, 229, 255), rgb(37, 8, 44))'}}>
                    <Box sx={{ flex: 1 , gap:2, flexDirection:'column', padding:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <h2>App Certificates</h2>
                                   
                          <Box width={150}>
                              <img width={'100%'} src={cert2} ></img>
                          </Box>
                           
                          <Box width={150}>
                              <img width={'100%'} src={cert3} ></img>
                          </Box>

                          <Button variant='contained' color="warning">
                            <a className={classes.download} href='https://wonderstories.onelink.me/3ltl/duwq7cx1'>Download App</a> 
                        </Button>
                    
                      </Box>
                  </Box>
              </Box>
            </Box>
        </Grid>
    </Grid>
    </Box>
    

 

  );
};

export default Recent;
