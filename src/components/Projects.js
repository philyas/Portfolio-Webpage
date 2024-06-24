import {Box, Grid} from '@mui/material'
import ProjectItem from './ProjectItem'
import therapy from './assets/therapy.png'
import chefs from './assets/chefs.png'
import atmosphair from './assets/atmosphair.png'
import menu from './assets/menu.png'
import classes from './Projects.module.css'

import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
import a3 from './assets/a3.png'
import a4 from './assets/a4.png'
import a5 from './assets/a5.png'

import t1 from './assets/t1.png'
import t2 from './assets/t2.png'
import t3 from './assets/t3.png'
import t4 from './assets/t4.png'
import t5 from './assets/t5.png'
import t6 from './assets/t6.png'
import t7 from './assets/t7.png'
import t8 from './assets/t8.png'
import t9 from './assets/t9.png'

import fuel1 from './assets/fuel1.png'
import fuel2 from './assets/fuel2.png'
import fuel3 from './assets/fuel3.png'
import fuel4 from './assets/fuel4.png'
import fuel5 from './assets/fuel5.png'
import fuel6 from './assets/fuel6.png'
import fuel7 from './assets/fuel7.png'
import fuel8 from './assets/fuel8.png'
import fuel9 from './assets/fuel9.png'

import time1 from './assets/time1.png'
import time2 from './assets/time2.png'
import time3 from './assets/time3.png'
import time4 from './assets/time4.png'
import time5 from './assets/time5.png'

import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c3 from './assets/c3.png'

import menu1 from './assets/menu1.png'
import menu2 from './assets/menu2.png'
import menu3 from './assets/menu3.png'

import pool_1 from './assets/pool_1.png'
import pool_2 from './assets/pool_2.png'
import pool_3 from './assets/pool_3.png'

import appscript from './assets/appscript.png'
import googlesheets from './assets/googlesheets.png'
import nodejs from './assets/nodejs.png'
import reactlogo from './assets/react.png'
import cloudfunctions from './assets/cloudfunctions-removebg-preview.png'
import htmllogo from './assets/html.png'
import bootstrap from './assets/bootstrap.png'
import css from './assets/css.png'
import firebaselogo from './assets/firebase.png'
import muilogo from './assets/mui.png' 
import javascriptlogo from './assets/javascript.png'
import postgres from './assets/postgresql_original_wordmark_logo_icon_146392.png'






function Projects() {

    let projects = [
        {title:'Chefs Webpage' ,  source:chefs, images:[chefs,c1,c2,c3], 
        text:'This webpage is a prototype and is created for a Kebab house in Höchst/Germany.',
        url:'https://appointment-manager-d88f7.web.app/'
        , stacks:[htmllogo, css, javascriptlogo, bootstrap, firebaselogo]
        },
        {title:'Atmosphair Webpage' ,source:atmosphair, images:[atmosphair,a1,a2,a3,a4,a5], 
        text:'This webpage is a prototype for a hairdresser in Michelstadt/Germany.',
        url:'https://atmosphair-fd02d.web.app/',
        stacks:[htmllogo,css,javascriptlogo, bootstrap, firebaselogo]
    },
       
        {title:'Chefs Menu',source:menu, images:[menu,menu1,menu2,menu3], 
        text:'This online menu is included in Chefs Webpage. The customers are able to receive the menu via QR Code',
        url:'https://chefs-burger.web.app/'
        , stacks:[htmllogo,css,javascriptlogo,bootstrap, firebaselogo]
    },

    {title:'E-Therapy' ,source:t1, images:[t1,therapy, t2,t3,t4,t5,t6,t7,t8,t9], 
    text:`This application prototype was created for a psychiatrist in Turkey. 
    Main functionalities are: Video-Call with questionnaire for the doctor, appointment booking, patients management.`,
    url:'https://e-therapy-b812c.web.app/',
    stacks:[reactlogo, muilogo, firebaselogo, cloudfunctions, nodejs]
},
    
        {title:'Order Accounting',source:pool_1, images:[pool_1,pool_2,pool_3],
        text:'This is a prototype for Billard Palace in Dieburg, which was created for more automation in accounting.'
        , url:"empty"
        ,stacks:[reactlogo,muilogo,nodejs, postgres]
         }
    ]


    return(
        <div id='projects' style={{textAlign:'center', marginTop:'20rem'}}>
            <Box position={'relative'} width={'100%'} overflow='hidden' padding={3}>
                <h1 className={classes.portfolioheader}>Web Apps</h1>
        
          
            </Box>
            <Grid container alignItems={'center'} justifyContent={'center'} spacing={5}>
            {projects.map((project,index)=> <Grid key={index} item alignItems={'center'} justifyContent={'center'}>
                <ProjectItem  stacks={project.stacks} title={project.title} source={project.source} description={project.text} images={project.images} url={project.url}></ProjectItem>
            </Grid>)}
        </Grid>
        </div>
    )
}

export default Projects