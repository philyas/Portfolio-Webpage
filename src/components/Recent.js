// src/components/VideoPlayer.js
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import classes from './Recent.module.css'

const Recent = () => {
  return (
    <Box className={classes.header} sx={{marginTop:'5%',flexDirection:'column', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <h1>
            Recent Project
        </h1>

       <Box className={classes.card}>
          <video width="260" controls>
            <source src={'https://mystorybucket.s3.eu-central-1.amazonaws.com/1000039255.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       </Box>
    </Box>

  );
};

export default Recent;
