import { Grid } from "@mui/material"
import ServiceItem from "./ServiceItem"
import safari from './assets/safari-removebg-preview.png'
import httpimg from './assets/web-removebg-preview.png'
import mobiles from './assets/iphones-removebg-preview.png'
import appscript from './assets/appscript-removebg-preview.png'
import classes from './Services.module.css'

function Services() {
    const icons = [
        {name:safari, scale:1.2, title:'Web Apps', description:`Web applications are software programs that run on the web and can be accessed through a web browser. Major adavantage of this technology is the cross-platform usability.`},
        {name:mobiles, scale:0.8, title:'Mobile Apps', description:`Mobile applications build with Expo and React Native are a good hybrid solution, if you want to run your application on IOS or Android devices`},
        {name:httpimg, scale:1.2, title: 'Rest API', description:'Here is where the logic comes in. Building backend logic on Server for your project is the key to combine your user interface with your business logic' },
        {name:appscript, scale:0.6, title: 'Sheet Automation' , description:'Google sheet automation is the most simple way to combine front and backend services, which you can also share with other partners.'},
    ]

    return(
        <div id="services" style={{marginTop:'10rem'}} >
            <Grid container gap={3} justifyContent={'center'}>
                    {icons.map((item,index)=> 
                    <Grid p={4} key={index} item display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <ServiceItem source={item.name} scale={item.scale} title={item.title} description={item.description}></ServiceItem>
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default Services