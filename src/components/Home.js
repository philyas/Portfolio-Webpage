import {Grid , Box, Stack, Button} from '@mui/material'
import Laptop from './Laptop';
import Profile from './Profile';
import About from './About';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Home() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen size is small
  const marginTop = isSmallScreen ? 100 : 5; // Set marginTop based on screen size

  return (
    <Grid gap={10}  container      style={{
      marginTop: `${marginTop}px`,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
        <About></About>
    </Grid>
  );
}

export default Home;
