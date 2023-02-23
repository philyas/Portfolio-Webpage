import { Grid } from "@mui/material";
import LinkItem from "./LinkItem";
import email from './assets/vecteezy_new-email-message-concept-3d-vector-mobile-application-icon_8007477-removebg-preview.png'
import github from './assets/github-removebg-preview.png'
import phone from './assets/phone-removebg-preview.png'
import classes from './Links.module.css'

function Links() {
    const links = [
        {name:email, descripton:'Email', url:'mailto:philyasmalik@gmail.com',scale:0.75},
        {name:github, descripton:'Github Repository', url:'https://github.com/philyas',scale:0.7},
        {name:phone, descripton:`Mobile`, url:'tel:+491766192395',scale:0.65},
    ]

    return(
        <div id="contact" style={{textAlign:'center', marginTop:'20rem'}}>
        <h1 className={classes.header} >Contact and Source Codes </h1>
        <Grid container sx={{width:{xs:300, sm:500, lg:1100, xl:1400}}} margin={'auto'} justifyContent={'center'} alignItems={'center'} spacing={4}>
         {links.map((link,index)=>  <Grid key={index} item lg={3} justifyContent={'center'} alignItems={'center'}>
            <LinkItem source={link.name} description={link.descripton} url={link.url} scale={link.scale}></LinkItem></Grid> )}
        </Grid>
        </div>
    )
}

export default Links