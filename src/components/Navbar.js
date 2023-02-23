import {Grid , Box, Stack} from '@mui/material'
import { useEffect, useState } from 'react';
import classes from './Navbar.module.css'
import { motion } from 'framer-motion';

function Navbar({scrollValue}) {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);


 
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const styles = {
    active: {
      position:'fixed',
      transition: "all 0.5s",
      background: scrollValue === 0 ? "transparent":"background: rgba(255, 255, 255)",
      backdropFilter:scrollValue === 0 ? 'none':'blur(5px)',
      WebkitBackdropFilter: scrollValue === 0 ? "none":"blur(5px)",
      boxShadow:scrollValue === 0 ? "none":"0px 0px 1px gray",
      textShadow: scrollValue === 0 ? "none" : "0px 0px 2px black",
      width:'100%'
    },
    listitem: {
      color:scrollValue === 0 ? "white":"white"
    },
    header: { margin:'0px 20px', color:scrollValue === 0 ? "white":"white" }
  }

  return (
    <motion.div className={classes.navbar} style={styles.active} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>
      <Stack>
        <Box sx={{width:'100%', height:'54px'}}>
            <Grid container alignItems={'center'} justifyContent={'space-between'}>
                <Grid item md={4} >
                    <Box  height={'100%'}>
                       <h1 style={styles.header}>{'</>'}</h1>
                    </Box>
                </Grid>
                {windowSize[0] > 800 ?  <Grid item md={4} sx={{mr:{lg:2, sm:15, xs:20}}}>
                  <Box>
                      <ul className={classes.list} >
                        <a  href='#home'><li style={styles.listitem}>Home</li></a>
                        <a href='#mystacks'><li style={styles.listitem}>Stacks</li></a>
                        <a href='#about'><li style={styles.listitem} >About</li></a>  
                        <a href='#projects'><li style={styles.listitem}>Portfolio</li></a>
                        <a href='#contact'><li style={styles.listitem}>Contact</li></a>
                 
                      </ul>
                  </Box>
                </Grid>: null }
      
            </Grid>
        </Box>
      </Stack>
    </motion.div>
  );
}

export default Navbar;
