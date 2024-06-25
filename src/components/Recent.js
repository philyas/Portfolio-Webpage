// src/components/VideoPlayer.js
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import classes from './Recent.module.css'

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
                  <Box sx={{ width: 260, height: 450, background: 'linear-gradient(140deg, rgb(247, 229, 255), rgb(37, 8, 44))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 , padding:2}}>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        </p>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Button variant='contained' color="secondary">
                            Download
                        </Button>
                    </Box>
                </Box>
              </Box>
            </Box>
        </Grid>
        <Grid item>
          <Box className={classes.header} sx={{marginTop:'5%',flexDirection:'column', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box className={classes.card}>
                  <Box sx={{width:260, height:450, background:'linear-gradient(140deg, rgb(247, 229, 255), rgb(37, 8, 44))'}}>

                  </Box>
              </Box>
            </Box>
        </Grid>
    </Grid>
    </Box>
    

 

  );
};

export default Recent;
