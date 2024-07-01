import React, { useRef, useContext, useEffect, useState } from 'react'
import "./z9x.css"
import mobHero from "../assets/z9x/hero-mob.webp"
import pchero from "../assets/z9x/hero-pc.webp"
import SubNav from '../components/SubNav'
import { delay, motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { Display } from '../App';
import { IoArrowUp } from "react-icons/io5";
import a from "../assets/z9x/a.webp"
import b from "../assets/z9x/b.png"
import c from "../assets/z9x/c.png"
import d from "../assets/z9x/d.webp"
import e from "../assets/z9x/e.png"
import f from "../assets/z9x/f.png"
import g from "../assets/z9x/g.png"
import battery1 from "../assets/z9x/battery1.png"
import battery2 from "../assets/z9x/battery2.png"
import flash from "../assets/z9x/flash.svg"

import mp3 from "../assets/z9x/music-note-2-svgrepo-com.svg"
import video from "../assets/z9x/video-frame-play-horizontal-svgrepo-com.svg"
import chat from "../assets/z9x/chat-square-svgrepo-com.svg"
import call from "../assets/z9x/call-svgrepo-com.svg"
import game from "../assets/z9x/gaming-pad-alt-1-svgrepo-com.svg"

import ram from "../assets/z9x/ram.png";
import screen from "../assets/z9x/screen.png"
import sound from "../assets/z9x/sound.png";
import cert from "../assets/z9x/certificate.png"

import green from "../assets/z9x/green.png"

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import bigGreen from "../assets/z9x/green-texture.png"
import bigBlack from "../assets/z9x/black-texture.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import cert2 from "../assets/z9x/cert2.svg"
import cert3 from "../assets/z9x/cert3.svg"

import port1 from "../assets/z9x/slots (1).png"
import port2 from "../assets/z9x/slots (2).png"

import slim from "../assets/z9x/slim.webp"

import { toughData } from '../data'
import bigCamera from "../assets/z9x/big-camera.png"
import camerabg from "../assets/z9x/camera-back.webp"
import wow from "../assets/z9x/wow.png"

import hdv from "../assets/z9x/videos/z9x1080.mp4"
import fourk from "../assets/z9x/videos/z9x4k.mp4"
import nightback from "../assets/z9x/other-camera.png"
import smoothex from "../assets/z9x/smooth-exp.png"
import appRetain from "../assets/z9x/app-retainer.png"
import fun14 from "../assets/z9x/funtouch14.webp"
import Footer from '../components/Footer'

import { z9xothers, z9xterms } from '../data'
import tornadoGreen from "../assets/z9x/tornado-green.png"
import stormgray from "../assets/z9x/storm-grey.png"
const cardData = [
    {
        url: a,
        title1: "snapdragon 6 gen 1 mobile platform",
        title2: "4nm processor",
        href: "processor"
    },
    {
        url: b,
        sub: "battery",
        title1: "6000 mAh Ultra Slim Battery + 44W FlashCharge",
        title2: "fast & long lasting",
        href: "battery"
    },
    {
        url: c,
        sub: "speaker",
        title1: "Dual Speaker & Audio Booster",
        title2: "300% volumne",
        href: "z9x-sound"
    },
    {
        url: d,
        sub: "design",
        title1: "premium texture design",
        title2: "0.799 cm (7.99 mm) Slim",
        href: "z9x-texture"
    },
    {
        url: e,
        sub: "camera",
        title1: "50 MP AI camera",
        title2: "capture what you see",
        href: "z9x-camera"
    },
    {
        url: f,
        sub: "display",
        title1: "6.72' ultra bright 120Hz adaptive display",
        title2: "bright & clear",
        href: "screen"
    },
    {
        url: g,
        sub: "funtouch",
        title1: "funtouch OS 14",
        title2: "based on android 14",
        href: "funtouch"
    }
]

const batteryIcons = [
    {
        url: mp3,
        p: "71.5 hours",
        p2: 'music playback'
    },
    {
        url: game,
        p: "7.9 hours",
        p2: 'gaming'
    },
    {
        url: chat,
        p: "21.6 hours",
        p2: 'social media'
    },
    {
        url: video,
        p: "30 hours",
        p2: 'video playback'
    },
    {
        url: call,
        p: "36.5 hours",
        p2: 'phone calls'
    }
]
const Z9x = () => {
    const display = useContext(Display)
    useEffect(()=>{
        document.title="iqoo | z9x"
        window.scrollTo(0,0)
        return ()=>{
            document.title="iqoo india"
        }
    },[])
    return (
        <section className={display ? "z9x-hide" : 'z9x'}>
            <div className='z9x-hero'>
                <SubNav name={"z9x"} />
                <img src={pchero} alt="" />
            </div>
            <div className='z9x-mob-hero'>
                <SubNav name={"z9x"} />
                <img src={mobHero} alt="" />
            </div>
            <MobFeatures />
            <Smoothness text={"Powerful Performance Backed by Long-Lasting Battery"} />
            <Processor />
            <BatteryLife />
            <Ram />
            <Smoothness text={"Bright and Loud both Inside and Out"} />
            <Screen />
            <Texture />
            <Sound />
            <Ports />
            <Slim />
            <Waterprof />
            <Tough />
            <Camera />
            <OtherCamera />
            <Smoothness text={"Enjoy Smoothness and User-Friendly Experience"} />
            <Others />
            <Z9xTerms />
            <Footer />
        </section>
    )
}

export default Z9x;

function MobFeatures() {
    const mobRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: mobRef });
    const leftVal = useTransform(scrollYProgress, [0, 1], [500, -900])
    const mobleftVal = useTransform(scrollYProgress, [0, 1], [100, -1550])
    // useMotionValueEvent(scrollYProgress, "change", latest => {
    //     console.log(latest)

    // })

    return (

        <div className='mob-features' ref={mobRef}>

            <div className='inner-mob-features' >

                <motion.div className='mf-inner-cards' style={{ left: leftVal }}>

                    {
                        cardData.map((item, index) => {
                            return (
                                <a className="mf-mob-card" key={index} href={"#" + item.href}>
                                    <img src={item.url} alt="" />
                                    <span className='mf-mob-card-title1'>{item.title1}</span>
                                    <span className='mf-mob-card-title2'>{item.title2}</span>
                                </a>
                            )

                        })
                    }

                </motion.div>
                <motion.div className='mob-mf-inner-cards' style={{ left: mobleftVal }}>

                    {
                        cardData.map((item, index) => {
                            return (
                                <a className="mf-mob-card" key={index} href={"#" + item.href}>
                                    <img src={item.url} alt="" />
                                    <span className='mf-mob-card-title1'>{item.title1}</span>
                                    <span className='mf-mob-card-title2'>{item.title2}</span>
                                </a>
                            )

                        })
                    }

                </motion.div>

            </div>
        </div>




    )
}


function Shutter({ text }) {

    const r = useRef();
    const view = useInView(r, { once: true })
    return (
        <div className='shutter' >
            <div ref={r} className='inner-shutter'>
                <motion.p initial={{ scale: 0, opacity: 0 }} animate={view ? { scale: 1.4, opacity: 1 } : { scale: 0, opacity: 0 }} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>powerful performance</motion.p>
                <motion.p initial={{ scale: 0, opacity: 0 }} animate={view ? { scale: 1.4, opacity: 1 } : { scale: 0, opacity: 0 }} transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}>Backed by Long-Lasting</motion.p>
                <motion.p initial={{ scale: 0, opacity: 0 }} animate={view ? { scale: 1.4, opacity: 1 } : { scale: 0, opacity: 0 }} transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}>battery</motion.p>
            </div>

        </div>
    )

}



function Processor() {
    const top = useRef()
    const mobTop = useRef();
    const view = useInView(top)
    const mobView = useInView(mobTop)

    return (
        <div className='processor' id="processor">
            <div className='process-data'>
                <motion.div className='process-data-top' ref={top} initial={{ y: "10vh", opacity: 0 }} animate={view ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.5 }}>
                    <h2>power-packed performance</h2>
                    <p ><span className="processor-name">Snapdragon® 6 Gen 1</span> Mobile Platform is built with the 4 nm process technology which offers super-low power consumption and high efficiency in multitasking, providing the lag-free experience while gaming, OTT watching, accessing work files and a lot more.</p>
                    <div className='perf-score'>
                        <span className='score-card'>
                            <p id="antutu-score">452452<sup>1</sup></p>
                            <p>antutu score</p>
                        </span>
                        <span className='score-card'>
                            <p>4nm</p>
                            <p>processor technology</p>
                        </span>
                        <span className='score-card'>
                            <p className="percent">35%</p>
                            <p>CPU performance</p>
                        </span>
                        <span className='score-card'>
                            <p className='percent'>30%</p>
                            <p>GPU performance</p>
                        </span>
                    </div>
                </motion.div>

            </div>

            <div className='process-image'>
                <img src={cardData[0].url} alt="" />
            </div>

            <div className='mob-processor'>
                <div className='mob-process-data' ref={mobTop} >
                    <motion.div className='inner-mob-process-data' initial={{ y: "20vh", opacity: 0 }} animate={mobView ? { y: 0, opacity: 1 } : { y: "20vh", opacity: 0 }} transition={{ duration: 1 }}>
                        <h2>power-packed performance</h2>
                        <p className='process-details'><span className="processor-name">Snapdragon® 6 Gen 1</span> Mobile Platform is built with the 4 nm process technology which offers super-low power consumption and high efficiency in multitasking, providing the lag-free experience while gaming, OTT watching, accessing work files and a lot more.</p>
                        <div className='perf-score'>
                            <span className='score-card'>
                                <p id="antutu-score">452452<sup>1</sup></p>
                                <p>antutu score</p>
                            </span>
                            <span className='score-card'>
                                <p>4nm</p>
                                <p>processor technology</p>
                            </span>
                            <span className='score-card'>
                                <p className="percent">35% <IoArrowUp className='percent-up' /></p>
                                <p>CPU performance</p>
                            </span>
                            <span className='score-card'>
                                <p className='percent'>30% <IoArrowUp className='percent-up' /></p>
                                <p>GPU performance</p>
                            </span>
                        </div>
                    </motion.div>

                </div>
                <div className='mob-process-image'>
                    <img src={cardData[0].url} alt="" />
                </div>
            </div>
        </div>
    )
}



function BatteryLife() {
    const top = useRef();
    const view = useInView(top)
    return (
        <section id="battery">
            <section className='battery'>
                <div className='battery-txt'>
                    <motion.div className='inner-battery-txt' ref={top} initial={{ y: "50vh", opacity: 0 }} animate={view ? { y: 0, opacity: 1 } : { y: "50vh", opacity: 0 }} transition={{ duration: 0.4 }}>
                        <div className='ibt1'>
                            <h2><span className="orange-txt">Always</span> Stay in Charge</h2>
                            <p>The 6000 mAh<sup>2</sup> large battery lets you stay ahead in your daily entertainment and adventures for 2 days straight without charging and the 44W FlashCharge will get you back in charge in no time.</p>
                        </div>
                        <div className='ibt2'>
                            <div>
                                <h3><span className='orange-txt'>4 year</span></h3>
                                <p className='grey-txt'>battery health<sup>3</sup></p>
                            </div>
                            <div>
                                <h3>2 Days</h3>
                                <p className='grey-txt'>usage with full charge<sup>3</sup></p>
                            </div>

                        </div>

                    </motion.div>
                </div>
                <div className="battery-specs">
                    <div className='battery-points'>
                        <div className='flash'>
                            <img src={flash} alt="" />
                        </div>
                        <p className='battery-spec-title'>Do more with<span className="orange-txt">Full charge</span></p>
                        <div className='inner-battery-points'>
                            {
                                batteryIcons.map((item, index) => {
                                    return (
                                        <div className='ibp-box' key={index}>
                                            <div className='ibp-icon'>
                                                <img src={item.url} alt="" />
                                            </div>
                                            <p className='ibp-p1'>{item.p}<sup>5</sup></p>
                                            <p className='ibp-p2-grey'>{item.p2}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='battery-image-box'>
                        <div className='inner-battery-image'>
                            <img src={battery2} />
                        </div>
                        <div className='inner-battery-image2'>
                            <img src={battery1} />
                        </div>
                        <span className="image-condition">*advertising creativity only. the actual product shall previal</span>
                    </div>
                </div>
            </section>
            <section className='mob-battery'>
                <div className='mob-battery-txt'>
                    <div className='inner-mob-battery-txt'>
                        <div id="mbt-top">
                            <h2><span className="orange-txt">Always</span> stay in charge</h2>
                            <p className='grey-txt'>The 6000 mAh2 large battery lets you stay ahead in your daily entertainment and adventures for 2 days straight without charging and the 44W FlashCharge will get you back in charge in no time.</p>
                        </div>
                        <div id="mbt-bottom">
                            <div>
                                <h3><span className='orange-txt'>4 year</span></h3>
                                <p className='grey-txt'>battery health<sup>3</sup></p>
                            </div>
                            <div>
                                <h3>2 Days</h3>
                                <p className='grey-txt'>usage with full charge<sup>3</sup></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mob-battery-image'>
                    <div className='mob-battery-pic'>
                        <img src={battery2} />
                    </div>
                    <div className='mob-battery-pic2'>
                        <img src={battery1} />
                    </div>
                    <span className="image-condition">*advertising creativity only. the actual product shall previal</span>
                </div>
                <div className='mob-battery-points'>
                    <div className='inner-mob-battery-points'>
                        {
                            batteryIcons.map((item, index) => {
                                return (
                                    <div className='ibp-box' key={index}>
                                        <div className='ibp-icon'>
                                            <img src={item.url} alt="" />
                                        </div>
                                        <p className='ibp-p1'>{item.p}<sup>5</sup></p>
                                        <p className='ibp-p2-grey'>{item.p2}</p>
                                    </div>
                                )
                            })
                        }
                        <div className='mob-flash'>
                            <img src={flash} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </section>

    )
}

function Ram() {
    const top = useRef()
    const view = useInView(top, { once: true })
    return (
        <section>
            <div className='ram'>
                <motion.div className='ram-points' ref={top}>
                    <motion.div className='inner-ram-points' initial={{ y: "20vh", opacity: 0 }} animate={view ? { y: 0, opacity: 1 } : { y: "20vh", opacity: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                        <div className='ram-p1'>
                            <h2><span className='orange-txt'>No More Stuttering</span>, Ultra
                                Smoothness</h2>
                            <p className='grey-txt'>The 8 GB RAM combined with 8 GB extended RAM reduces stuttering issues, enabling smooth switching between apps and hassle-free swiping.<sup>6</sup></p>
                        </div>
                        <div className='ram-p2'>
                            <div className="inner-ram-p2">
                                <p className="ram-p2-title orange-txt">27+</p>
                                <p className='grey-txt'>Active Background Apps</p>
                            </div>
                            <div className="inner-ram-p2">
                                <p className='ram-p2-title'>up to 1TB</p>
                                <p className='grey-txt'>expandable storage</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className='ram-pic'>
                    <img src={ram} alt="" />
                </div>
            </div>
        </section>
    )
}


function Screen() {

    const top = useRef();
    const bottom = useRef();

    const topview = useInView(top, { once: true })
    const bottomview = useInView(bottom)
    return (
        <section className='screen' id="screen">
            <motion.div className='screen-top' ref={top}>
                <motion.div className='inner-screen-top' initial={{ y: "20vh", opacity: 0 }} animate={topview ? { y: 0, opacity: 1 } : { y: "20vh", opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>

                    <h2 ><span className='orange-txt'>clear and vivid</span> in sunlight</h2>
                    <p className='grey-txt'>Unleash the immersive viewing experience on the 6.72-inch display that supports 7-level adaptive refresh rate, with 120 Hz as the highest, which enhances your visual experience and keeps the power consumption low.</p>

                </motion.div>
            </motion.div>
            <div className='screen-image'>
                <img src={screen} alt="" />
            </div>
            <motion.div className='screen-bottom' ref={bottom}>
                <motion.div className='inner-screen-bottom' initial={{ y: "10vh", opacity: 0 }} animate={bottomview ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.2, delay: 0.1 }}>
                    <div>
                        <p className='big-txt'>6.72 (17.07cm)</p>
                        <p className='small-grey-txt'>big display</p>
                    </div>
                    <div>
                        <p className='big-txt'>120Hz</p>
                        <p className='small-grey-txt'>7-Level Adaptive Refresh Rate</p>
                    </div>
                    <div>
                        <p className='big-txt'>1000nits</p>
                        <p className='small-grey-txt'>High Brightness Mode(HBM)</p>
                    </div>
                    <div>
                        <span className='small-cert-image'><img src={cert} alt="" /></span>
                        <p className='small-grey-txt'>Low Blue Light Certification</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )

}




function Texture() {

    const tref = useRef();
    const t1 = useRef();
    const p1 = useRef();
    const { scrollYProgress } = useScroll({ target: tref })

    const w = useTransform(scrollYProgress, [0, 0.1], [200, window.innerWidth])
    const h = useTransform(scrollYProgress, [0, 0.3], [200, window.innerWidth > 700 ? (window.innerHeight * 3) : ((window.innerHeight) / 2 * 3)])

    const w2 = useTransform(scrollYProgress, [0, 0.1], [200, window.innerWidth])
    const h2 = useTransform(scrollYProgress, [0, 0.3], [200, window.innerWidth > 700 ? (window.innerHeight - 60) : ((window.innerHeight / 2) - 60)])
    const o2 = useTransform(scrollYProgress, [0, 1], [1, 0])
    const o3 = useTransform(scrollYProgress, [0, 0.05], [1, 0])
    const br = useTransform(scrollYProgress, [0, 0.2], [40, 0])

    const v2 = useInView(p1)


    return (
        <section className="texture" ref={tref} id="z9x-texture">
            <motion.p id="premium-title" ref={p1} style={{ opacity: o3 }}>premium texture design</motion.p>
            <div className='texture-top'>
                <motion.div className='expand-text' style={{ width: w, height: h, borderRadius: br }}>
                    <motion.div className='expand-pic' style={{ width: w2, height: h2, opacity: o2 }}>
                        <img src={green} alt="" />
                    </motion.div>
                    <DetailText />
                    <LastText />
                </motion.div>


            </div>

        </section>
    )
}
function DetailText() {
    const t1 = useRef();
    const { scrollYProgress } = useScroll({ target: t1 })
    const o = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    return (
        <div className='detail-text1' >
            <motion.div className='inner-detail-texture' ref={t1} >
                <motion.h2 style={{ opacity: o }}>premium texture design</motion.h2>
                <motion.p style={{ opacity: o }}>Boasting the latest design from iQOO family, the phone looks natural in light and shadow. Its stylish streamlined flat frame makes it easy to carry and comfortable to hold. The sunburst texture on the back makes it look more powerful in performance and aesthetically delightful in appearance.</motion.p>
            </motion.div>
        </div>
    )
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="dt-arrow dta-right" onClick={onClick}>
            <FaArrowRight className='estore-slider1-icon-right' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="dt-arrow dta-left" onClick={onClick}>
            <FaArrowLeft className='estore-slider1-icon-left' />
        </div>
    );
}
function LastText() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <div className='detail-text2'>
            <Slider {...settings} className='dt-slider'>
                <div className="dt-card dt-card1">
                    <div className='dt-card-image'><img src={tornadoGreen} alt="" /></div>
                    <div className='dt-card-text'>
                        <h3 id="dt-green">tornado green</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime itaque inventore facilis quos odit ullam reprehenderit quibusdam numquam eum pariatur?</p>
                    </div>
                </div>
                <div className="dt-card dt-card2">
                    <div className='dt-card-image'><img src={stormgray} alt="" /></div>
                    <div className='dt-card-text'>
                        <h3 id="dt-black">storm gray</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime itaque inventore facilis quos odit ullam reprehenderit quibusdam numquam eum pariatur?</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
function Sound() {
    return (
        <section className='sound' id="z9x-sound">
            <div className='sound-details'>
                <div className='sd-1'>
                    <h2><span className='orange-txt'>experience sound</span> like portable speakers</h2>
                    <p>The phone features a 3.5 mm earphone port and has obtained Hi-Res Audio certification, delivering clear and realistic sound effects that captivate your sense. With a maximum 300% volume, it offers a larger volume while significantly reducing distortion.</p>
                </div>
                <div className='sd-2'>
                    <div>
                        <p className='sd-bold'>300%</p>
                        <p className='sd-light-grey'>maximum volumn</p>
                    </div>
                    <div>
                        <p className='sd-bold'>3.5mm</p>
                        <p className='sd-light-grey'>headphone jack</p>
                    </div>
                </div>
                <div className='sd-3'>
                    <p className='sd-bold'>Hi-res Audio</p>
                    <p className='sd-light-grey'>cetification</p>
                    <div>
                        <span className='sd-cert'>
                            <img src={cert3} alt="" />
                        </span>
                        <span className='sd-cert'>
                            <img src={cert2} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='sound-image'>
                <img src={sound} alt="" />
                <div className='sound-wave'>
                    <div className='wave wave1'></div>
                    <div className='wave wave2'></div>
                    <div className='wave wave3'></div>
                </div>
                <div className='sound-wave'>
                    <div className='wave wave1'></div>
                    <div className='wave wave2'></div>
                    <div className='wave wave3'></div>
                </div>
            </div>
        </section>
    )
}

function Ports() {
    return (
        <section className='port'>
            <h2 id="nostalgia">feeling nostalgic <br />already?</h2>
            <div className="port-box">
                <div className="inner-port">
                    <p className='port-title'>3.5mm port</p>
                    <div className='port-image'>
                        <img src={port2} alt="" />
                    </div>

                </div>
                <div className="inner-port">
                    <p className='port-title'> 1 TB Expandable Memory</p>
                    <div className='port-image'>
                        <img src={port1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Slim() {
    const phone = useRef()
    const view = useInView(phone, { once: true })

    const top = useRef();
    const view2 = useInView(top)
    const ani = {
        start: {
            x: "-100vw"
        },
        end: {
            x: 0,
            transition: { duration: 0.2, delay: 0.2 }
        }
    }
    const ani2 = {
        start: {
            y: "10vh",
            opacity: 0
        },
        end: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.2 }
        }
    }
    return (
        <section className='slim'>
            <div className='slim-top' ref={top}>
                <motion.div className='slim-top-txt' variants={ani2} initial="start" animate={view2 ? "end" : "start"}>
                    <h2>might <span className='orange-txt'>battery</span> yet <span className='orange-txt'>slim</span></h2>
                    <p>The lightweight architecture allows Z9x equipped with a large 6000 mAh battery to be only 0.799 cm (7.99 mm) thick.</p>
                </motion.div>
            </div>
            <div className='slim-bottom'>
                <div className='slim-image' >
                    <motion.img src={slim} variants={ani} initial="start" animate={view ? "end" : "start"} />
                </div>
                <div className='slim-txt' ref={phone}>
                    <div className='slim-stats'>0.799 cm <span className='slim-small-text'>(7.99 mm)</span></div>
                    <div className='slim-stats'>6000 mAh</div>
                </div>
            </div>


        </section>
    )
}


function Waterprof() {
    const txt = useRef();
    const view = useInView(txt)

    const motionvar = {
        start: {
            y: "10vh",
            opacity: 0
        },
        end: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.2, delay: 0.1 }
        }
    }
    return (
        <section className='ip'>
            <div className='ip-txt' ref={txt}>
                <motion.div className='inner-ip-txt' variants={motionvar} initial="start" animate={view ? "end" : "start"}>
                    <h2>Let It <span className='orange-txt'>Splash </span>!</h2>
                    <h3>IP64 Dust and Water Resistance<sup>7</sup></h3>
                    <p>Going through rigorous tests, it is IP64-rated. Dust finds nowhere to get in, and liquid splashes cause no damage to the case from any direction.</p>
                </motion.div>
            </div>
        </section>
    )
}

function Tough() {


    return (
        <section className='tough'>
            <h2><span className='orange-txt'>Powerful</span> Inside. <span className='orange-txt'>Tough</span> Outside.</h2>
            <div className='tough-tiles'>

                {
                    toughData.map((item, index) => {
                        return (
                            <div className='tough-tile' key={index}>
                                <div className='tough-tile-pic'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className='tough-tile-txt'>
                                    <p className='ttt-l1'>{item.unit}</p>
                                    <p className='ttt-l2'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

function Camera() {

    const camera = useRef()

    const { scrollYProgress } = useScroll({ target: camera })

    const right = useTransform(scrollYProgress, [0, 0.2], [-500, 0])
    useMotionValueEvent(scrollYProgress, "change", latest => {
        console.log(latest)

    })

    return (
        <section className="camera" id="z9x-camera">
            <div className='camera-top'>
                <div className='camera-txt'>
                    <h2><span className='orange-txt'>Capture</span> the Same as You See!</h2>
                    <p>The cameras' high quality enables you to take more amazing shots and record remarkable moments.</p>
                    <div className='camera-specs'>
                        <div className='camera-spec-box'>
                            <p className='mega-pixel'>50 MP</p>
                            <p className='camera-type'>main camera</p>
                        </div>
                        <div className='camera-spec-box'>
                            <p className='mega-pixel'>2 MP</p>
                            <p className='camera-type'>bokeh camera</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='camera-pic' ref={camera}>
                <motion.div className='inner-camera-pic' style={{ right: right }}>
                    <img src={bigCamera} alt="" />
                </motion.div>
                <div className='mob-camera-pic'>
                    <img src={bigCamera} alt="" />
                </div>
            </div>
            <div className='camera-bottom'>
                <img src={camerabg} alt="" />
            </div>
        </section>
    )
}

function OtherCamera() {

    const wowtxt = useRef();
    const videotxt = useRef();
    const view1 = useInView(wowtxt)
    const view2 = useInView(videotxt)
    return (

        <section className='oth-camera'>
            <div className='wow'>
                <div className='wow-pic'>
                    <img src={wow} alt="" />
                </div>
                <div className='wow-txt' ref={wowtxt}>
                    <motion.div initial={{ y: "10vh", opacity: 0 }} animate={view1 ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.5, dealy: 0.2 }} className='inner-wow-txt'>
                        <h2>Clarity That Makes You Go <span className='orange-txt'>WOW...</span></h2>
                        <p>The 50 MP ultra HD camera gives you freedom to capture smooothly and clearly. The AI support additionaly bring the perferct lighting and colors to make every moment worth capturing.</p>
                    </motion.div>
                </div>
            </div>
            <div className="hdvideo" ref={videotxt}>
                <motion.div className="hd-video-top" initial={{ y: "20vh", opacity: 0 }} animate={view2 ? { y: 0, opacity: 1 } : { y: "20vh", opacity: 0 }} transition={{ duration: 0.8, dealy: 0.2 }}>
                    <h2><span className='orange-txt'>4k</span> video</h2>
                    <p>Capture life's moments exactly as you see them. 4K clarity delivers incredible sharpness and vibrancy.<sup>8</sup></p>
                </motion.div>

                <div className='video-box'>
                    <div className="inner-video-box">
                        <video src={hdv} alt="" autoPlay={true} muted={true} loop={true}></video>
                        <div className='video-type'>1080P video</div>
                    </div>
                    <div className="inner-video-box">
                        <video src={fourk} alt="" autoPlay={true} muted={true} loop={true}></video>
                        <div className='video-type'>4K video</div>
                    </div>
                </div>
            </div>
            <div className='night-cam'>
                <h2>explore the night your way</h2>
                <p>Enjoy every moment. Capture the night life with clarity and noise control to get the best shots even in the low-light environment.</p>
                <div className='night-cam-pic'><img src={nightback} alt="" /></div>
            </div>
        </section>
    )
}

function Smoothness({ text }) {
    const sref = useRef();

    const { scrollYProgress } = useScroll({ target: sref })
    const ghost = useTransform(scrollYProgress, [0, 1], [1, 0])
    const ghost2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 0])
    const top = useTransform(scrollYProgress, [0, 1], [0, -200])
    const left = useTransform(scrollYProgress, [0, 1], [50, -100])
    // useMotionValueEvent(scrollYProgress, "change", latest => {
    //     console.log(latest)

    // })

    return (
        <section className="smooth" ref={sref}>
            <motion.div className='inner-smooth' style={{ opacity: ghost }}>
                <motion.div className='flick flick1' style={{ top: top }}></motion.div>
                <div className='s-text' >
                    <p>{text}</p>

                </div>
                <div className='s-text-back'>
                    <motion.p style={{ opacity: ghost2, left: left }} id="stb-p1">{text}</motion.p>

                </div>
                <motion.div className='flick flick2' style={{ bottom: top }}></motion.div>
            </motion.div>
        </section>
    )
}

function Others() {
    return (
        <section className='z9x-others' id="z9x-funtouch">
            <div className='z9x-smooth'>
                <div className="z9x-smooth-text">
                    <p>50 month smooth experience<sup>9</sup></p>
                </div>
                <div className='z9x-smooth-pic'>
                    <img src={smoothex} alt="" />
                </div>
            </div>
            <div className='parent-app-retain'>
                <div className='app-retain'>
                    <div className="app-retain-txt">
                        <div id="funtouch">
                            <div id="funtouch-pic">
                                <img src={fun14} alt="" />
                            </div>
                        </div>
                        <div id="funtouch-text">
                            <h2>app retainer<sup>10</sup></h2>
                            <p>It can quickly restore your background apps to their previous
                                state and progress when you start the app again, ensuring an
                                uninterrupted user experience.</p>
                        </div>
                    </div>
                    <div className="app-retain-pic">
                        <img src={appRetain} alt="" />
                    </div>
                </div>
            </div>
            {/* <div className='z9x-other-feat'>
                <div className='z9x-other-pic'>
                    <img src={hiddenpic} alt="" />
                </div>
                <div className='z9x-other-text'>
                    <h2>hidden photos</h2>
                    <p>Protect your privacy by hiding sensitive images from prying
                        eyes, ensuring that they remain unseen by others.
                    </p>

                </div>
            </div> */}

            {
                z9xothers.map((item, index) => {
                    return (
                        <div className={index !== 1 ? 'z9x-other-feat' : 'z9x-other-feat z9x-other-feat-reverse'} key={index}>
                            <div className='z9x-other-pic'>
                                <img src={item.url} alt="" />
                            </div>
                            <div className='z9x-other-text'>
                                <h2>{item.title}</h2>
                                <p>{item.p}</p>

                            </div>
                        </div>
                    )


                })
            }

        </section>
    )
}

function Z9xTerms() {
    return (
        <section className='z9x-terms'>
            <ol className='z9x-term-list'>
                {
                    z9xterms.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ol>
            <ul>
                <li>The product pictures, structure illustrations and features shown are for reference only. Please take actual products as standard. </li>
                <li>As some specifications, parameters, or parts of the product may vary due to changes in suppliers or different production batches, iQOO may update the descriptions on this page accordingly without giving any prior notice. Please read this page carefully before use. </li>
                <li>When paired with the original charger and cable, the maximum supported charging power is 44W. The actual charging power is dynamically adjusted as the scene changes, and subject to actual use. </li>

            </ul>
        </section>
    )
}