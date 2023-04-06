import {Grid , Box, Stack, Button} from '@mui/material'
import classes from './Home.module.css'
import {motion } from "framer-motion";
import Typewriter from './Typewriter';
import Blinktype from './Blinktype';
import Laptop from './Laptop';

function Home() {

    const styleheader = {
        alignItems: {
            xs:'center', lg:'start'
        }
    }

    const boxStyle = {
        width:{
            xs:'90%',
            lg:'100%'
        }
    }





  return (
    <div id='home' >
        <Grid container sx={{width:'100%', height:'100vh', paddingTop:10}}>
             <Grid item  xs={12} sm={12} md={12} lg={6}>
                <Box position={'relative'}  width={'100%'} sx={{padding:{xs:0, sm:7}}} >
                    <Stack className={classes.text} sx={styleheader}>
                        <div className={classes.header} style={{display:'flex'}}><Typewriter text={'I AM PHI NGUYEN'}></Typewriter><Blinktype></Blinktype></div>
                        <Box sx={boxStyle}>
                            <motion.div style={{ background: 'linear-gradient(to right,rgb(0, 50, 228),rgb(255, 233, 246) 90%)', margin:'auto'}}
                                initial={{width:'0%', height:0}} animate={{width:'100%',height:1}} transition={{delay:3, duration:1 }}
                            ></motion.div>
                        </Box>
                        <motion.h1 className={classes.secondheader} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>Software developer</motion.h1>
                        <Box className={classes.paragraph}>
                        <motion.p style={{margin:'0.6em' }} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>
                         I am a passionated fullstack web & app developer being focused on building apps, which saves a bunch of time for people and let them work more efficiently.
                         Are you stressed about doing tasks, that takes too much time and you want to automate your daily tasks? Than it would be a pleasure for me to create something according your desires!
                        </motion.p>
                        </Box>
                       
                        <motion.div style={{display:'flex'}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>
                        <a href='#projects' style={{textDecoration:'none'}}>
                             <Button sx={{position:'relative',margin:'1em', fontWeight:'bold', 
                             background:'yellowgreen','&:hover': {
                                background: "greenyellow",
                             }, backdropFilter:'blur(5px);', 
                             boxShadow:'0 0 4px lightgray'
                             }} variant='contained'> 
                            See my projects
                            </Button>
                            </a>
                        </motion.div>
                      
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:3}}>
                <Box my={10} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >            
                <Box position={'relative'} height={400} padding={1} >
                             <Box sx={{width:{xs:350, sm:350, md:500}, height:400}}>
                                <Laptop></Laptop>
                             </Box>
                </Box>
                </Box>
                </motion.div>
        
             </Grid>

        </Grid>
    </div>
  );
}

export default Home;
