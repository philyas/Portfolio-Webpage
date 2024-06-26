import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stacks from './components/Stacks';
import Projects from './components/Projects';
import MobileProjects from './components/MobileProjects';
import Services from './components/Services';
import Links from './components/Links';
import { useState } from 'react';
import {ContextData} from './components/CountContext/CountContext'
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Recent from './components/Recent';
import Experience from './components/Experience';

function App() {
  const [count,setCount] = useState(0)

  return (
   <ContextData.Provider value={[count,setCount]}>
    <div className="App">
        <Box>
          <Navbar></Navbar>
          <Home></Home>
          <Services></Services>
          <Stacks></Stacks>
          <Experience></Experience>
          <Recent></Recent>
          <Projects></Projects>
          <MobileProjects></MobileProjects>
          <Links></Links>
          <Footer></Footer>
        </Box>
    </div>
    </ContextData.Provider>
  );
}

export default App;
