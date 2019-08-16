import React from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Bienvenido from '../components/Bienvenido'
import Portafolio from '../components/Portafolio';
import Skills from '../components/Skills';

const App = () =>{
    return(
        <div>
        <Main>
            <NavBar/>
            <Hero/>
        </Main>
        <Bienvenido/>
        <Skills/>
        <Portafolio/>
        </div>
    )
}

export default App;