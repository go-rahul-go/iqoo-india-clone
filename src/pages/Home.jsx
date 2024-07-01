import React, { useContext, useRef, useEffect, useState } from 'react'
import "./home.css";
import LatestPhone from '../components/LatestPhone';
import latestphonepic from "../assets/latest-product2.jpg";
import Phone from '../components/Phone';
import neo9 from "../assets/neo9pro-hero.jpg"
import neo9mob from "../assets/neo9pro-hero-mob.png"
import iqoo12 from "../assets/iqoo12.jpg"
import iqoo12rot from "../assets/iqoo12 - Copy.jpg"
import { Display } from '../App';
import Discover from '../components/Discover';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ContactBox from '../components/ContactBox';
import ShowContact from '../components/ShowContact';

const Home = () => {
    const display = useContext(Display)
    const topRef = useRef();
    const [top, changeTop] = useState(false)
    const [showContacts,updateShowContact]=useState(false);

    useEffect(()=>{
        window.scrollTo(0,0)
        document.title="homepage | iQOO india"

        return ()=>{
            document.title="iQOO india"
        }
    },[])
    return (
        <section className={display ? "home-hide" : "home"}>
            <LatestPhone title={"iQOO Z9x"} tag={"india's slimmest phone with 6000mAh battery*"} imageUrl={latestphonepic} changeTop={changeTop} url={"/z9x"}/>
            <Phone imageUrl={neo9} name="neo9" title="Neo9 Pro" tag="Snapdragon 8 gen2" mobImageUrl={neo9mob} color="none" />
            <Phone imageUrl={iqoo12} name="iqoo12" title=" 12" tag="Snapdragon 8 gen3" mobImageUrl={iqoo12rot} color={"desert red"} />
            <Discover />
            <Footer />
            <ScrollToTop atTop={top} hrefid={"#latest-phone"}/>
            <ContactBox updateShowContact={updateShowContact} showContacts={showContacts}/>
            <ShowContact visibility={showContacts} updateShowContact={updateShowContact}/>
        </section>
    )
}

export default Home;