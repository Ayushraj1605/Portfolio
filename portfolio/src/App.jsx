import React from 'react';
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import About from "./components/about/About"

const App = () => {
    return (
        <div>
            <Cursor />
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <Parallax />
            <section id="About">
                <About/>
            </section>
            <Parallax />
            <section id="Portfolio">
                <Portfolio/>
            </section>
            <section>

            </section>
            <section>
              
            </section>
            <Parallax />
            <section id='Contact'>
                <Contact />
            </section>
        </div>
    );
};

export default App;
