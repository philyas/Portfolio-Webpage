import { Grid } from "@mui/material";
import LinkItem from "./LinkItem";
import email from './assets/vecteezy_new-email-message-concept-3d-vector-mobile-application-icon_8007477-removebg-preview.png'
import github from './assets/github-removebg-preview.png'
import phone from './assets/phone-removebg-preview.png'
import classes from './Links.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';

function Links() {
    const links = [
        {name:email, icon:MailIcon, descripton:'Email', url:'mailto:philyasmalik@gmail.com',scale:0.45, text:"philyasmalik@gmail.com"},
        {name:github,icon:GitHubIcon, descripton:'Github', url:'https://github.com/philyas',scale:0.45, text:"https://github.com/philyas"},
        {name:phone, icon:PhoneAndroidIcon,descripton:`Mobile`, url:'tel:+4917661923495',scale:0.45, text:"+49 176 619 234 95"},
    ]

    return(
        <div id="contact" style={{textAlign:'center', marginTop:'10%'}}>
        <h1 className={classes.header} >Contact Details</h1>
        <Grid gap={2} container sx={{width:{xs:350, sm:500, lg:1100, xl:1400, margin:'auto'}}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
         {links.map((link,index)=>  <Grid key={index} item lg={3} justifyContent={'center'} alignItems={'center'}>
            <LinkItem source={link.name} Icon={link.icon} description={link.descripton} url={link.url} text={link.text} scale={link.scale}></LinkItem></Grid> )}
        </Grid>
        </div>
    )
}

export default Links