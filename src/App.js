import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stacks from './components/Stacks';
import About from './components/About';
import Projects from './components/Projects';
import MobileProjects from './components/MobileProjects';
import Services from './components/Services';
import Links from './components/Links';
import { useState, useEffect, useRef } from 'react';
import {ContextData} from './components/CountContext/CountContext'
import { Box } from '@mui/material';
import Background from './components/Background';
import Footer from './components/Footer';


function App() {
  const [count,setCount] = useState(0)

  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  
  useEffect(() => {

    const currentContainer = containerRef.current
    const handleScroll = () => {
      setScrollTop(currentContainer.scrollTop);
    };
    currentContainer.addEventListener('scroll', handleScroll);

    return () => {
      currentContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);


  return (
   <ContextData.Provider value={[count,setCount]}>
    <div className="App">
        <Box  ref={containerRef} sx={{width:'100%', height:'100vh', overflowY:'scroll', scrollBehavior:'smooth'}}>
          <Background></Background>
          <Navbar scrollValue={scrollTop}></Navbar>
          <Home></Home>
          <About></About>
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
