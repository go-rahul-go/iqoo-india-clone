import React, { useContext, useEffect, useRef, useState } from 'react'
import "./estore.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { slider1data } from '../data';
import { Display } from "../App.js"
import smartphone from "../assets/estore/smartphone-icon.webp"
import liveico from "../assets/estore/live-icon.webp"
import ContactBox from '../components/ContactBox.jsx';
import ShowContact from '../components/ShowContact.jsx';
import estorez9x from "../assets/estore/e-store-z9x.jpg"
import estoreiqoo12 from "../assets/estore/iqoo12.jpg"
import { useInView } from 'framer-motion';
import { zcards } from '../data';
import { refurb } from '../data';
import { reviews } from '../data';
import Footer from '../components/Footer.jsx';
import { eServiceIcons } from '../data';
import WelcomeGift from '../components/WelcomeGift.jsx';
import hand from "../assets/scroll-left-svgrepo-com.svg"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="slider1-arrow s1-right-arrow" onClick={onClick}>
            <FaArrowRight className='estore-slider1-icon-right' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="slider1-arrow s1-left-arrow" onClick={onClick}>
            <FaArrowLeft className='estore-slider1-icon-left' />
        </div>
    );
}
const Estore = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: function (i) {
            return (
                <div className='slider-bar'>

                </div>
            );
        },
        autoplay: true,
        autoplaySpeed:3000,
        cssEase: "linear"

    };

    const displayStore = useContext(Display);
    const [showContacts, updateShowContact] = useState(false)
    return (
        <section className={displayStore ? "e-store-hide" : "e-store"}>
            <section className="store-slider1">
                <Slider {...settings} className='slider1'>

                    {
                        slider1data.map((item, index) => {
                            return (
                                <Link className='slider-card1' key={index}>
                                    <img src={item} alt="" />
                                </Link>
                            )
                        })
                    }
                </Slider>
            </section>
            <div className='smartphone-others'>
                <div className='inner-smartphone-others'>
                    <div className="iso-text">
                        <h2>smartphones</h2>
                        <p>Official iQOO Smartphones</p>
                    </div>
                    <div className='iso-pic'>
                        <img src={smartphone} alt="" />
                    </div>
                </div>
                <div className='inner-smartphone-others'>
                    <div className="iso-text">
                        <h2>live streaming</h2>
                        <p>All iQOO Live Shows</p>
                    </div>
                    <div className='iso-pic'>
                        <img src={liveico} alt="" />
                    </div>
                </div>
            </div>
            <FreshNewProduct image={estorez9x} title={"fresh new arrival"} />
            <FreshNewProduct image={estoreiqoo12} title={"popular best seller"} />
            <Zseries title={"z series"} cards={zcards} type="new"/>
            <Zseries title={"refurbished"} cards={refurb} type="refurbished"/>
            <Expert />
            <EstoreServices />
            <ContactBox updateShowContact={updateShowContact} showContacts={showContacts} />
            <ShowContact visibility={showContacts} updateShowContact={updateShowContact} />
            <WelcomeGift />
            <Footer />

        </section>
    )
}

export default Estore;



function FreshNewProduct({ image, title }) {
    return (
        <section className='fresh-new'>
            <h2 className='estore-h2'>{title}</h2>
            <div className="inner-fresh-new">
                <img src={image} alt="" />
            </div>
        </section>
    )
}

function Zseries({ title, cards,type }) {
    const [slide, changeSlide] = useState("please-slide");

    const s = useRef();
    const sview = useInView(s, { once: true });

    useEffect(() => {
        let timerid;

        if (sview) {
            timerid = setTimeout(() => {
                changeSlide("please-slide-block")
                console.log("time")
            }, 1000)

        }    
        
        return () => {
            clearTimeout(timerid);
            
        }
    }, [sview])

    useEffect(()=>{
        window.scrollTo(0,0)
        document.title="e-store | iQOO india"

        return()=>{
            document.title="iQOO india"
        }
    },[])
    return (
        <section className="z-series">
            <h2 className='estore-h2'>{title}</h2>
            <div className='inner-z-series' ref={s}>
                <div className='z-products'>
                    {
                        cards.map((item, index) => {
                            return (
                                <div className='z-card' key={index}>
                                    <div className='z-card-mobile'>
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className='z-card-specs'>
                                        <div className='z-card-up'>
                                            <p className='z-card-title'>{item.title}</p>
                                            <p className='z-card-ram'>{item.st}</p>
                                        </div>
                                        <div className='z-card-down'>
                                            <p className='z-card-price'>₹{item.price}</p>
                                            <div className='z-card-mrp'>
                                                <p className='z-card-original-price'>₹{item.mrp}</p>
                                                <span className='z-card-discount'>-{item.discount}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {type==="refurbished"&&<div className="z-card-type" >{type}</div>}
                                </div>
                            )
                        })
                    }

                </div>
                <div className={slide} >
                    <div className='please-slide-pic'>
                        <img src={hand} alt="" />
                    </div>
                    <p>slide to see more products</p>
                </div>
            </div>
        </section>
    )
}

function Expert() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: function (i) {
            return (
                <div className='slider-bar'>

                </div>
            );
        },
        
        autoplay: true,
        autoplaySpeed:3000,
        cssEase: "linear"

    };
    return (
        <section className='expert-reviews'>
            <h2 className='estore-h2'>expert reviews</h2>
            <div className='expert-slider-box'>
                <Slider {...settings} className='expert-slider'>
                    {
                        reviews.map((item, index) => {
                            return (
                                <div className='expert-slide'>
                                    <img src={item} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

function EstoreServices() {
    return (
        <section className='e-services'>
            <div className='e-services-box'>
                {
                    eServiceIcons.map((item, index) => {
                        return (
                            <div className='e-services-card' key={index}>
                                <div className="e-services-card-icon">
                                    <img src={item.url} alt="" />
                                </div>
                                <div className="e-services-card-text">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

