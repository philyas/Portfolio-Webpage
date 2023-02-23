import {Grid , Box, Stack, Button} from '@mui/material'
import classes from './Home.module.css'
import {motion } from "framer-motion";
import Typewriter from './Typewriter';
import Blinktype from './Blinktype';

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

    const pbox = {
        borderRadius:2,
        color:'white',
        fontSize:'21px',
    }



  return (
    <div id='home' >
        <Grid className={classes.bg} container paddingTop={35} spacing={5} mb={20}>
       
             <Grid item  sm={12} lg={6}>
                <Box position={'relative'}  width={'100%'} height={600} sx={{left:{sm:0, lg:100}}}>
                    <Stack className={classes.text} sx={styleheader}>
                        <div className={classes.header} style={{display:'flex'}}><Typewriter text={'I AM PHI NGUYEN'}></Typewriter><Blinktype></Blinktype></div>
                        <Box sx={boxStyle}>
                            <motion.div style={{ background: 'linear-gradient(to right,rgb(19, 129, 238),rgb(204, 233, 246) 90%)', margin:'auto'}}
                                initial={{width:'0%', height:0}} animate={{width:'100%',height:1}} transition={{delay:3, duration:1 }}
                            ></motion.div>
                        </Box>
                        <motion.h1 className={classes.secondheader} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>Software developer</motion.h1>
                        <Box style={pbox}>
                        <motion.p style={{margin:'0.6em' }} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>
                         I am a passionated fullstack web & app developer being focused on building apps, which saves a bunch of time for people and let them work more efficiently.
                         Are you stressed about doing tasks, that takes too much time and you want to automate your daily tasks? Than it would be a pleasure for me to create something according your desires!
                        </motion.p>
                        </Box>
                       
                        <motion.div style={{display:'flex'}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}}>
                        <a href='#projects' style={{textDecoration:'none'}}>
                             <Button sx={{position:'relative',margin:'1em', fontWeight:'bold', 
                             background:'transparent','&:hover': {
                                background: "#40E0D0",
                             }, backdropFilter:'blur(5px);', 
                             boxShadow:'0 0 4px skyblue'
                             }} variant='contained'> 
                            See my projects
                            </Button>
                            </a>
                        </motion.div>
                      
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={12} lg={6} >
                <Box position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} width='80%' height={600}  >            
                <Box position={'relative'}  width={'100%'} height={600} sx={{left:{sm:0, lg:100}}}>
                </Box>
                </Box>
             </Grid>

        </Grid>
    </div>
  );
}

export default Home;
