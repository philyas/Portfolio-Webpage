import classes from './Stacks.module.css'
import {Grid } from '@mui/material'
import StackItem from './StackItem';
import nodeimg from './assets/pngaaa.com-4547668-removebg-preview.png'
import expressimg from './assets/expressjs_logo_icon_169185.png'
import reactlogo from './assets/react_original_logo_icon_146374.png'
import postgresimg from './assets/postgresql_original_wordmark_logo_icon_146392.png'
import mongoimg from './assets/mongodb_original_wordmark_logo_icon_146425.png'
import tsimg from './assets/typescript_original_logo_icon_146317-removebg-preview.png'
import appscript from './assets/google_script_apps_logo_icon_159351-removebg-preview.png'
import expologo from './assets/expo-removebg-preview.png'
import python from './assets/python.png'
import java from './assets/java.png'
import javascript from './assets/javascript.png'

function Stacks() {
    const stacks = [
     {
        title:"Node.js",
        name:nodeimg,
        color1:"green",
        color2:"yellowgreen",
        percentage:70
     },
     {
      title:"Express.js",
        name:expressimg,
        color1:"yellow",
        color2:"orange",
        percentage:90
     },
     {
      title:"Expo/React Native",
        name:expologo,
        color1:"white",
        color2:"white",
        percentage:90
     },
     {
      title:"React.js",
        name:reactlogo,
        color1:"white",
        color2:"white",
        percentage:90
     },
     {
      title:"PostgreSQL",
        name:postgresimg,
        color1:"skyblue",
        color2:"white",
        percentage:70
     },
     {
      title:"MongoDB",
        name:mongoimg,
        color1:"green",
        color2:"greenyellow",
        percentage:70
     },
     {
      title:"JavaScript",
        name:javascript,
        color1:"white",
        color2:"white",
        percentage:90
     },
     {
      title:"TypeScript",
        name:tsimg,
        color1:"skyblue",
        color2:"#ADD8E6",
        percentage:60
     },
     {
      title:"Google App Script",
        name:appscript,
        color1:"beige",
        color2:"white",
        percentage:95
     },
     {
      title:"Python",
        name:python,
        color1:"white",
        color2:"white",
        percentage:60
     },
     {
      title:"Java",
        name:java,
        color1:"white",
        color2:"white",
        percentage:40
     }
    ]

    return (
      <div id='mystacks' style={{ textAlign:'center'}}>
        <h1 className={classes.stacks}>Skills</h1>
        <Grid container padding={3} gap={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
           {stacks.map((item,index)=> <Grid item p={5} key={index} alignItems={'center'} justifyContent={'center'} display='flex'> 
                    <StackItem title={item.title} percentage={item.percentage} url={item.name} color1={item.color1} color2={item.color2}></StackItem>
           </Grid> )}
        </Grid>
      </div>
    );
  }
  
  export default Stacks;
  