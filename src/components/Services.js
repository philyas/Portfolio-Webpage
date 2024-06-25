import { Grid } from "@mui/material"
import ServiceItem from "./ServiceItem"
import safari from './assets/safari-removebg-preview.png'
import httpimg from './assets/web-removebg-preview.png'
import mobiles from './assets/iphones-removebg-preview.png'
import appscript from './assets/appscript-removebg-preview.png'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import HttpIcon from '@mui/icons-material/Http';
import RotateRightIcon from '@mui/icons-material/RotateRight';


function Services() {
    const icons = [
        {name:safari, scale:1.2, title:'Web Apps', icon: BrowserUpdatedIcon , description:`Web applications are software programs that run on the web and can be accessed through a web browser. Major adavantage of this technology is the cross-platform usability.`},
        {name:mobiles, scale:0.8, title:'Mobile Apps', icon:MobileFriendlyIcon, description:`Mobile applications build with Expo and React Native are a good hybrid solution, if you want to run your application on IOS or Android devices`},
        {name:httpimg, scale:1.0, title: 'Rest API', icon:HttpIcon, description:'This is where logic comes into play. Building backend logic on a server for your project is key to integrating your user interface with your business logic.' },
        {name:appscript, scale:0.6, title: 'Automation' , icon:RotateRightIcon, description:'Google Sheets automation is the simplest way to integrate front-end and back-end services, which can also be shared with other partners'},
    ]

    return(
        <div id="services" style={{marginTop:'2rem'}} >
            <Grid container gap={3} justifyContent={'center'}>
                    {icons.map((item,index)=> 
                    <Grid p={1} key={index} item display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <ServiceItem Icon={item.icon} source={item.name} scale={item.scale} title={item.title} description={item.description}></ServiceItem>
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default Services