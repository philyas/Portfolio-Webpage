import MobileItem from "./MobileItem"
import iphone from './assets/iphone.png'
import { Grid } from "@mui/material"
import timetracker from './assets/timetracker.png'
import nailtracker from './assets/nailtracker.png'
import nailtracker_2 from './assets/nailtracker_2.png'
import nailtracker_3 from './assets/nailtracker_3.png'
import nailtracker_4 from './assets/nailtracker_4.png'
import nailtracker_5 from './assets/nailtracker_5.png'
import booking from './assets/appointment.png'
import booking_2 from './assets/booking_2.png'
import timetracker_2 from './assets/timetracker_2.png'
import timetracker_3 from './assets/timetracker_3.png'
import timetracker_4 from './assets/timetracker_4.png'
import classes from './MobileProjects.module.css'

function MobileProjects() {
   

    const projects = [
        {title:'Employee timetracker',name:iphone, app: [timetracker_4,timetracker_2, timetracker_3, timetracker]},
        {title:'Employee accounting tracker',name:iphone, app:[nailtracker_5, nailtracker, nailtracker_2, nailtracker_3, nailtracker_4]},
        {title:'Appointment booking',name:iphone, app:[booking, booking_2]},
    ]

    return(
        <div style={{marginTop:'25rem', textAlign:'center'}}>
        <h1 className={classes.header}>MOBILE APPS</h1>
        <p style={{color:'gray', fontSize:'18px'}}>Click &#x2193;and &#x2191; to scroll</p>
        <Grid  gap={15} container style={{alignItem:'center', justifyContent:'center'}}>
           {projects.map((item,index)=> <Grid p={5} key={index} item display={'flex'} alignItems='center' justifyContent={'center'} >
               <MobileItem title={item.title} source={item.name} app={item.app}></MobileItem>
           </Grid>)}
        </Grid>
        </div>
    )
}

export default MobileProjects