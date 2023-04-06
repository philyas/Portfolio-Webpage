import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Background(){
    const [loaded,setLoaded] = useState(false)

    const image = new window.Image()
    image.src = 'https://4kwallpapers.com/images/wallpapers/microsoft-surface-1920x1200-9243.png'
    image.onload = ()=> { setLoaded(true)}

    return (
      <div>
        {
            loaded ?    <img  src={'https://4kwallpapers.com/images/wallpapers/microsoft-surface-1920x1200-9243.png'} 
            width='100%' height={'100%'} style={{ zIndex:'-2', position:'fixed', left:0,top:0}} alt='main'></img> : 
            <Box sx={{ display: 'flex', width:'100%', height:'100vh' , alignItems:'center', justifyContent:'center'}}>
                 <CircularProgress size={100} />
          </Box>
        }
      </div>
    )
}

export default Background;