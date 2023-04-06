import {Box} from '@mui/material'
import firebaselogo from './assets/firebase.png'
import reactlogo from './assets/reactlogo.png'
import materialui from './assets/mui.png'

const Footer = ()=> {
    return(
        <Box display={'flex'} sx={{background:'#000013'}} justifyContent={'center'} gap={4} alignItems={'center'} boxShadow={4} p={5} mt={10} >
              <p style={{color:'white'}}>This webpage was created with React.js, Material UI and Firebase</p>
              <img width={50} src={reactlogo} alt="react"></img>  
              <img width={50} src={materialui} alt="mui"></img>  
              <img width={50} src={firebaselogo} alt="firebase"></img>
        </Box>
    )
}

export default Footer