import React, { useRef } from 'react';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import "./Portfolio.scss";

const items = [
    {
        id: 1,
        title: "Real-Time ChatApp",
        img: "chatapp.png",
        desc: "This is a real-time chat application.",
    },
    {
        id: 2,
        title: "Snake-Game",
        img: "snakegame.jpeg",
        desc: "This is a classic snake game.",
    },
    {
        id: 3,
        title: "Another Game",
        img: "chatapp.png",
        desc: "This is another exciting game.",
    }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
