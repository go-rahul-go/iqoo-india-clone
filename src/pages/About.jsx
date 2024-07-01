import React, { useContext ,useEffect,useRef} from 'react'
import "./about.css";
import abouthero from "../assets/about/about-film.mp4";
import { Display } from '../App';
import m1 from "../assets/about/m1.webp"
import m2 from "../assets/about/m2.png"
import m3 from "../assets/about/m3.png"
import bmw from "../assets/about/iqoo_about-partnerships-img2.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { aboutslides } from '../data';
import Footer from '../components/Footer';
import { useInView } from 'framer-motion';
import OtherScrollToTop from '../components/OtherScrollToTop';


const About = () => {
    const displaySetting = useContext(Display)
    const top=useRef();

    const topView=useInView(top)

    useEffect(()=>{
        window.scrollTo(0,0);
        document.title="about us | iQOO india"

        return()=>{
            document.title="iQOO india"
        }
    },[])
    return (
        <section className={displaySetting ? "about-hide" : "about"}>
            <div className="about-hero" ref={top} id="hero-top">
                <div className='about-hero-video'>
                    <video src={abouthero} muted={true} autoPlay={true} loop={true} />
                </div>
                <div className='about-hero-bio'>
                    <div className='ideology'>
                        <h1>brand ideology</h1>
                        <p>Dream big. Don’t be scared. The journey while exciting, is exhausting. But the rewards? Totally worth it.. </p>
                    </div>
                </div>
            </div>
            <div className="about-moto">
                <div className="moto">
                    <div className='moto-pic'>
                        <img src={m2} alt="" />
                    </div>
                    <div className='moto-bio'>
                        <div className='moto-bio-show'>
                            <h2>The Core that Guides our Truth</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita dolor quo quis vero magnam blanditiis, corporis quos optio debitis!</p>
                        </div>
                    </div>
                </div>
                <div className="moto">
                    <div className='moto-pic'>
                        <img src={m1} alt="" />
                    </div>
                    <div className='moto-bio'>
                        <div className='moto-bio-show'>
                            <h2>A Manifesto that Embodies our Belief</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita dolor quo quis vero magnam blanditiis, corporis quos optio debitis!</p>
                        </div>
                    </div>
                </div>
                <div className="moto">
                    <div className='moto-pic'>
                        <img src={m3} alt="" />
                    </div>
                    <div className='moto-bio'>
                        <div className='moto-bio-show'>
                            <h2>The Promise that We Live by</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita dolor quo quis vero magnam blanditiis, corporis quos optio debitis!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Sponsor />
            <AboutSlider />
            <Footer/>
            <OtherScrollToTop atTop={!topView} hrefid={"#hero-top"}/>
        </section>
    )
}

export default About;


function Sponsor() {
   
    return (
        <div className='sponsor'>
            <div className="sponsor-pic">
                <img src={bmw} alt="" />
            </div>
            <div className='sponsorship'>
                <h1 className='hide-this'>BMW M motorsport premium partner</h1>
                <div className='show-this'>
                    <h2>BMW M motorsport premium partner</h2>
                    <p>iQOO is the premium sponsor of BMW M Motorsport in 2022. We are inspired by how BMW M Motorsport leads the motorsport world through innovation and performance, making us more determined to lead the of world of powerful smartphones. This year promises to be exciting with the iQOO BMW M4 GT3 setting the racetracks of the 2022 DTM on fire.</p>
                </div>
            </div>
            <div className='mob-spon'>
                <p>BMW M motorsport premium partner</p>
            </div>
        </div>
    )
}

function AboutSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:3,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    
                }
            }
        ]
    };

   
    return (
        <div className="about-slider-box">
            <Slider {...settings} >
                {
                    aboutslides.map((item, index) => {
                        return (
                            <div className='about-slide' key={index}>
                                <img src={item} alt="" />
                            </div>
                        )
                    }
                    )
                }

            </Slider>
        </div>
    )
}