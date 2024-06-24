import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stacks from './components/Stacks';
import About from './components/About';
import Projects from './components/Projects';
import MobileProjects from './components/MobileProjects';
import Services from './components/Services';
import Links from './components/Links';
import { useState } from 'react';
import {ContextData} from './components/CountContext/CountContext'
import { Box } from '@mui/material';
import Footer from './components/Footer';


function App() {
  const [count,setCount] = useState(0)

  return (
   <ContextData.Provider value={[count,setCount]}>
    <div className="App">
        <Box>
          <Navbar></Navbar>
          <Home></Home>
          <Stacks></Stacks>
          <Services></Services>
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
