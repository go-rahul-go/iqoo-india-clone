import React, { useContext, useRef } from 'react'
import Display from "../App"
import "./phone.css";
import { Link } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa";
import { motion, useInView } from 'framer-motion'
import iqoo12rot from "../assets/iqoo12 - Copy.jpg"
import IqooLogo from './IqooLogo';

import { MdKeyboardArrowRight } from "react-icons/md";
import { BsSuitDiamondFill } from "react-icons/bs";
const Phone = ({ imageUrl, title, tag, name, mobImageUrl, color }) => {
    const display = useContext(Display)
    const phoneref = useRef(null);
    const mobRef = useRef();
    const phoneView = useInView(phoneref, { once: true })
    const mobView = useInView(mobRef, { once: true })
    return (


        <section className={display ? "phone-hide" : "phone"} >
            <motion.div className='phone-pc' ref={phoneref} initial={{ y: "10vh", opacity: 0 }} animate={phoneView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className='phone-pic'>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={name === "iqoo12" ? "phone-txt phone-txt-white" : "phone-txt"} >
                    <motion.div className='inner-phone-txt' initial={{ y: "10vh", opacity: 0 }} animate={phoneView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                        <div className='phone-title'><IqooLogo color={name === "iqoo12" ? "white" : "black"} size={30} rad={12} border={4} />{title}</div>
                        {name === "iqoo12" ? <p id="color-name">{color}</p> : ""}

                        <p className='phone-usp'>{tag}</p>
                        <Link className={name === "iqoo12" ? "phone-link phone-link-white" : "phone-link"}>
                            <p>know more</p> 
                            <div className={name==="iqoo12"?"ani-button ani-button-white":"ani-button"}>
                                <MdKeyboardArrowRight id="right-arrow"/>
                                <BsSuitDiamondFill id="diamond"/>
                            </div>

                        </Link>
                    </motion.div>

                </div>
            </motion.div>

            <motion.div className='phone-mob' ref={mobRef} initial={{ y: "10vh", opacity: 0 }} animate={mobView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className='phone-mob-pic'>
                    <img src={mobImageUrl} alt="" id={name === "iqoo12" ? "move-up" : "move-left"} />
                </div>
                <motion.div className={name !== "neo9" ? "phone-mob-txt" : "phone-mob-txt phone-mob-txt-white"} >
                    <motion.div className='inner-phone-txt' initial={{ y: "10vh", opacity: 0 }} animate={mobView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 1, delay: 0.3 }} >
                        <div className='phone-mob-title'>
                            <IqooLogo color={name === "iqoo12" ? "white" : "black"} size={20} rad={8} border={3} />
                            <p>{title}</p>
                        </div>
                        {name === "iqoo12" ? <p id="color-name">{color}</p> : ""}
                        <p>{tag}</p>

                        <Link className={name === "iqoo12" ? "phone-link phone-link-white" : "phone-link"}>
                            <p>know more</p> 
                            <div className={name==="iqoo12"?"ani-button ani-button-white":"ani-button"}>
                                <MdKeyboardArrowRight id="right-arrow"/>
                                <BsSuitDiamondFill id="diamond"/>
                            </div>

                        </Link>
                    </motion.div>

                </motion.div>
            </motion.div>
        </section >

    )
}

export default Phone