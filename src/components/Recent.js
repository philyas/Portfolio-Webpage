// src/components/VideoPlayer.js
import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import classes from './Recent.module.css'
import cert2 from './assets/cert2.png'
import cert3 from './assets/cert3.png'

const Recent = () => {
  return (
    <Box className={classes.header} sx={{display:'flex', marginTop:'5%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1 id='recent'>
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
                        Discover the magic of AI-generated children's stories! With Wonder Stories, simply speak your story prompt, and our AI will create a unique tale narrated in a lifelike voice. Choose from various languages and enjoy endless enchanting adventures. Perfect for bedtime, car rides, and sparking imagination! The following story is generated from our user.
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
