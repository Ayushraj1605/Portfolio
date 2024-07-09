import React, { useEffect, useState } from 'react';
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import About from "./components/about/About";
import Loader from './components/loader/Loader';

const App = () => {
    const [isLoading, setIsLoading] =useState(true);

    useEffect(()=>{
        const fakeDataFetch =()=>{
                setTimeout(()=>{
                setIsLoading(false);
            },6000);
        };
        
        fakeDataFetch();
    },[]);

   

    return isLoading ?(
        <Loader/>

    ):(<div>
            <Cursor />
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section>
                <Parallax />
            </section>
            <section id="About">
                <About/>
            </section>
            <section>
            <Parallax />
            </section>
            <section id="Portfolio">
                <Portfolio/>
            </section>

            <section>

            </section>
            <section>

            </section>
            <section>
              
            </section>

            <section>
            <Parallax />
            </section>
            <section id='Contact'>
                <Contact />
            </section>
        </div>
    );
};

export default App;
