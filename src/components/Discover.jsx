import React, { useRef } from 'react'
import "./discover.css";

import one from "../assets/discover/z7.jpg"
import two from "../assets/discover/neo7pro.jpg"
import three from "../assets/discover/z7pro.jpg"
import four from "../assets/discover/z6lite.jpg"
import five from "../assets/discover/iqoo9.jpg"
import { motion, useInView } from 'framer-motion';
const data = [
    {
        id: 0,
        url: one,
        title: "iQOO Z7(5g)",
        sub: "Ultra Stable 64MP OIS Camera"
    },
    {
        id: 1,
        url: two,
        title: "iQOO Neo7 Pro (5G)",
        sub: "Snapdragon 8+ gen 1"

    },
    {
        id: 2,
        url: three,
        className: "three",
        title: "iQOO Z7 pro (5G)",
        sub: "Fully loaded"
    },
    {
        id: 3,
        url: four,
        className: "four",
        title: "iQOO 9 Pro",
        sub: "120W Flashcharge"
    },
    {
        id: 4,
        url: five,
        className: "five",
        title: "iQOO Z6 Lite (5G)",
        sub: "6GB+128GB 120Hz FHD+ display"
    }
]

const ani = {
    start: {
        y:"10vh",
        opacity: 0
    },
    end: {
        y:0,
        opacity: 1
    }
}
const Discover = () => {

    const phoneRef = useRef();
    const phoneView = useInView(phoneRef, { once: true })
    return (
        <div className='discover'>
            <h1>discover</h1>
            <motion.div className='inner-discover' ref={phoneRef}>
                <div className='first'>
                    <motion.div className='d-card d-card1' variants={ani} initial="start" animate={phoneView ? "end" : "start"} transition={{ duration: 1.5 }}>
                        <img src={one} alt="" />
                        <div className='d-card1-txt'>
                            <p className='d-card-title d-card-title-black'>iQOO Z6 lite (5g)</p>
                            <p className='d-card1-sub d-card1-sub-black'>Ultra Stable 64MP OIS Camera</p>
                        </div>
                    </motion.div>
                    <motion.div className='d-card d-card2' variants={ani} initial="start" animate={phoneView ? "end" : "start"} transition={{ duration: 1.5, delay: 0.2 }}>
                        <div className='d-card2-img'>
                            <img src={five} alt="" />
                        </div>
                        <div className='d-card2-txt'>
                            <p className='d-card2-title'>iQOO 9 pro</p>
                            <p className='d-card2-sub-title'>120 w flashcharge</p>
                        </div>
                    </motion.div>
                </div>
                <div className='second'>
                    <motion.div className='d-card d-card3' variants={ani} initial="start" animate={phoneView ? "end" : "start"} transition={{ duration: 1.5, delay: 0.4 }}>
                        <img src={two} alt="" />
                        <div className='d-card1-txt'>
                        <p className='d-card-title'>iQOO Z6 lite (5g)</p>
                            <p className='d-card1-sub'>Snapdragon 8+ gen 1</p>
                        </div>
                    </motion.div>
                </div>
                <div className='third'>
                    <motion.div className='d-card d-card2' variants={ani} initial="start" animate={phoneView ? "end" : "start"} transition={{ duration: 1.5, delay: 0.6 }}>
                        <div className='d-card2-img'>
                            <img src={three} alt="" />
                        </div>
                        <div className='d-card2-txt'>
                        <p className='d-card2-title'>iQOO Z7 pro (5g)</p>
                            <p className='d-card2-sub-title'>Fully loaded</p>
                        </div>
                    </motion.div>
                    <motion.div className='d-card d-card1' variants={ani} initial="start" animate={phoneView ? "end" : "start"} transition={{ duration: 1, delay: 0.4 }}>
                        <img src={four} alt="" />
                        <div className='d-card1-txt'>
                            <p className='d-card-title'>iQOO Z6 lite (5g)</p>
                            <p className='d-card1-sub'>6GB+12GB 120HZ FHD+ display</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className="inner-mob-discover">
                {
                    data.map((item, index) => {
                        return (
                            <MobCard image={item.url} key={index} position={item.id} title={item.title} sub={item.sub} />
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default Discover;



function MobCard({ image, position, title, sub }) {
    const mob = useRef(null);
    const see = useInView(mob, { once: true });
    return (
        <motion.div ref={mob} className='outer-mob-card'>
            <motion.div className='mob-d-card' initial={{ y: "10vh", opacity: 0 }} animate={see ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <div className="mob-d-card-image"><img src={image} alt="" id={position === 1 ? "shift-top" : ""} /></div>
                <div className='mob-d-card-txt'>
                    <p>{title}</p>
                    <p>{sub}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

