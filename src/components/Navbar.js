import {Grid , Box, Stack, Button} from '@mui/material'
import { useEffect, useState } from 'react';
import classes from './Navbar.module.css'
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer} from '@mui/material';
import lalogo from './assets/lalogo.png'
import lalogoblue from './assets/lalogoblue.png'

function Navbar() {
  const [open, setOpen] = useState(false)
 
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [shadow,setShadow] = useState('none')

  const scrollHandler = ()=> {
    if (window.scrollY > 100) {
      setShadow('0 0 3px 1px lightgray')
    }
    else {
      setShadow('none')
    }
  }

   window.addEventListener("scroll", scrollHandler)



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
      transition: "all 0.2s",
      background: 'white',
      width:'100%',
      zIndex:1,
      boxShadow:shadow
    },
    listitem: {
      color:'rgb(1,20,19)'
    },
    header: { margin:'0px 20px', color:'rgb(1,20,19)' }
  }

  return (
    <motion.div className={classes.navbar} style={styles.active} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>
      <Stack>
        <Box sx={{width:'100%', paddingY:1}}>
            <Grid container alignItems={'center'} justifyContent={'space-between'} >
                <Grid item md={4} >
                    <Box>
                       <img style={{width:90,height:40}} src={lalogoblue}></img>
                    </Box>
                </Grid>
                {windowSize[0] > 800 ?  <Grid item md={4} sx={{mr:{lg:2, sm:15, xs:20}}}>
                  <Box>
                      <ul className={classes.list} >
                        <a  href='#home'><li style={styles.listitem}>Home</li></a>
                        <a href='#about'><li style={styles.listitem} >About</li></a>  
                        <a href='#mystacks'><li style={styles.listitem}>Stacks</li></a>
                        <a href='#projects'><li style={styles.listitem}>Portfolio</li></a>
                        <a href='#contact'><li style={styles.listitem}>Contact</li></a>
                 
                      </ul>
                  </Box>
                </Grid>:
                <Box>
                      <Button onClick={()=> setOpen(true) } variant='outlined' sx={{borderColor:'lightgray', "&:hover": {borderColor:'lightgray'}, marginRight:2}}><MenuIcon sx={{color:'gray'}}></MenuIcon></Button>
                      <Drawer
                          anchor={'right'}
                          open={open}
                          onClose={()=> setOpen(false)} >
                          <ul className={classes.listmobile}>
                              <a   href='#home' onClick={()=> setOpen(false)}><li style={styles.listitem}>Home</li></a>
                              <a href='#about' onClick={()=> setOpen(false)} ><li style={styles.listitem} >About</li></a>  
                              <a href='#mystacks' onClick={()=> setOpen(false)}><li style={styles.listitem}>Stacks</li></a>
                              <a href='#projects' onClick={()=> setOpen(false)}><li style={styles.listitem}>Portfolio</li></a>
                              <a href='#contact' onClick={()=> setOpen(false)}><li style={styles.listitem}>Contact</li></a>
                          </ul>
                        </Drawer>
                </Box>
                }
      
            </Grid>
        </Box>
      </Stack>
    </motion.div>
  );
}

export default Navbar;
