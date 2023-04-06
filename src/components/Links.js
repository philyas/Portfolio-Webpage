import { Grid } from "@mui/material";
import LinkItem from "./LinkItem";
import email from './assets/vecteezy_new-email-message-concept-3d-vector-mobile-application-icon_8007477-removebg-preview.png'
import github from './assets/github-removebg-preview.png'
import phone from './assets/phone-removebg-preview.png'
import classes from './Links.module.css'

function Links() {
    const links = [
        {name:email, descripton:'Email', url:'mailto:philyasmalik@gmail.com',scale:0.75, text:"philyasmalik@gmail.com"},
        {name:github, descripton:'Github', url:'https://github.com/philyas',scale:0.7, text:"https://github.com/philyas"},
        {name:phone, descripton:`Mobile`, url:'tel:+4917661923495',scale:0.65, text:"+49 176 619 234 95"},
    ]

    return(
        <div id="contact" style={{textAlign:'center', marginTop:'20rem'}}>
        <h1 className={classes.header} >CONTACT</h1>
        <Grid container sx={{width:{xs:300, sm:500, lg:1100, xl:1400}}} margin={'auto'} justifyContent={'center'} alignItems={'center'} spacing={4}>
         {links.map((link,index)=>  <Grid key={index} item lg={3} justifyContent={'center'} alignItems={'center'}>
            <LinkItem source={link.name} description={link.descripton} url={link.url} text={link.text} scale={link.scale}></LinkItem></Grid> )}
        </Grid>
        </div>
    )
}

export default Links