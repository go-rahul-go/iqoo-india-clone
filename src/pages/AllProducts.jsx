import react, { useState, useContext, useRef, useEffect } from "react"
import "./allproducts.css"
import { Display } from "../App"
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { products } from "../data";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { PiSmileySadBold } from "react-icons/pi";
import { MdHourglassEmpty } from "react-icons/md";
import Footer from "../components/Footer";
import OtherScrollToTop from "../components/OtherScrollToTop";
import { IoClose } from "react-icons/io5";


const ani={
    start:{
        y:"-50px",
        opacity:0
    },end:{
        y:0,
        opacity:1,
        transition:{duration:0.2,type:"spring",stiffness:100}
    }
}
const AllProducts = () => {

    const display = useContext(Display)
    const [showMore, changeShowMore] = useState(false);
    const [filter, updateFilter] = useState("all models")

    const [temp, updateTemp] = useState(products.slice(0, 6))

    const [end, updateEnd] = useState(6);
    const showMoreRef = useRef();

    const [mobopt, showMobOpt] = useState(false);
    const [showTop,showTopSettings]=useState(false);
    const headingRef=useRef();
    const headingShow=useInView(headingRef)

    const showMoreProducts = () => {

        
            updateEnd(end + 6)
            updateTemp(products.slice(0, end))
            console.log("temp length "+temp.length+", products length "+products.length)
       
            
            




    }
    const showView = useInView(showMoreRef)
    useEffect(() => {
        let timer;
        timer = setTimeout(() => {
            if (showView && (temp.length!==products.length)) {
                showMoreProducts();
            }
        }, 350)

        if(end>6)
        {
                showTopSettings(true)
        }
        if(headingShow)
            {
                showTopSettings(false)
            }

        return () => clearTimeout(timer)
    })

    useEffect(()=>{

        window.scrollTo(0,0);
        document.title="Products | iQOO india";

        return ()=>{
            document.title="iQOO india"
        }

    },[])
    return (
        <section className={display ? "products-hide" : "products"}>
            <div className="products-head">
                <h1 ref={headingRef}>find the phone that's right for you</h1>
            </div>
            <div className="p-navigator">
                <div className="inner-p-nav">
                    <span className={filter === "all models" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => updateFilter("all models")}>
                        all models
                    </span>
                    <span className={filter === "12 series" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => { updateFilter("12 series"); }}>
                        iQOO 12
                    </span>
                    <span className={filter === "neo series" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => { updateFilter("neo series"); }}>
                        neo series
                    </span>
                    <span className={filter === "11 series" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => { updateFilter("11 series"); }}>
                        11 series
                    </span>
                    <span className={filter === "z series" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => { updateFilter("z series"); }}>
                        z series
                    </span>
                </div>
                <div className={showMore ? "show-more-products show-more-products-up" : "show-more-products"} onClick={() => changeShowMore(!showMore)}>
                    <IoIosArrowDown />
                </div>
                <div className={showMore ? "show-hidden-p" : "hide-hidden-products"}>
                    <span className={filter === "9 series" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => updateFilter("9 series")}>9 series</span>
                    <span className={filter === "7 series" ? "p-nav-link p-selected" : "p-nav-link"} onClick={() => updateFilter("7 series")}>7 series</span>
                </div>
            </div>
            <div className="p-mob-navigator" >
                <div className="p-mob-option-name" onClick={() => showMobOpt(!mobopt)}>{filter}</div>
                <div className="p-mob-nav-arrow" onClick={() => showMobOpt(!mobopt)}>
                    {mobopt?<IoClose/>:<IoIosArrowDown/>}
                </div>
                <motion.div className={mobopt ? "p-mob-nav-option" : "p-mob-nav-option-hide"} variants={ani} initial="start" animate={mobopt?"end":"start"}>
                    <p onClick={() => { updateFilter("all models"); showMobOpt(false) }} className={filter==="all models"?"p-mob-link-active":"p-mob-link"}>all models</p>
                    <p onClick={() => { updateFilter("12 series"); showMobOpt(false) }} className={filter==="12 series"?"p-mob-link-active":"p-mob-link"}>12 series</p>
                    <p onClick={() => { updateFilter("z series"); showMobOpt(false) }} className={filter==="z series"?"p-mob-link-active":"p-mob-link"}>z series</p>
                    <p onClick={() => { updateFilter("neo series"); showMobOpt(false) }} className={filter==="neo series"?"p-mob-link-active":"p-mob-link"}>neo series</p>
                    <p onClick={() => { updateFilter("9 series"); showMobOpt(false) }} className={filter==="9 series"?"p-mob-link-active":"p-mob-link"}>9 series</p>
                    <p onClick={() => { updateFilter("7 series"); showMobOpt(false) }} className={filter==="7 series"?"p-mob-link-active":"p-mob-link"}>7 series</p>
                </motion.div>
            </div>
            <div className="products-menu" id="products-menu">
                {
                    temp.map((item, index) => {


                        if (filter === item.series) {
                            return (<PCard colors={item.colors} product={item} key={index}/>)
                        }
                        else if (filter === "all models") {
                            return (<PCard colors={item.colors} product={item} key={index}/>)
                        }
                        return null;
                    })
                }

            </div>
            <div className="scroll-more" >
                {temp.length === products.length ? <div >no more products <PiSmileySadBold id="sad"/></div> : <div ref={showMoreRef}>scroll for more products <MdHourglassEmpty id="hour-glass"/></div>}
            </div>
            <Footer/>
            <OtherScrollToTop atTop={showTop} hrefid={"#products-menu"}/>
        </section>
    )
}


export default AllProducts;


function PCard({ colors, product }) {
    const [color, changeColor] = useState(0)
    //    console.log(colors)
    return (
        <Link className="p-card">
            <span className="p-card-image">
                <img src={product.url[color]} alt="" />
            </span>
            <span className="p-card-bottom">

                <span className="p-colors">
                    {
                        colors.map((item, index) => {
                            return (
                                <span className={color === index ? "p-color-btn p-color-btn-active" : "p-color-btn"} style={{ backgroundColor: item }} onClick={() => changeColor(index)} >

                                </span>
                            )
                        })
                    }
                </span>
                <h2 className="p-card-title">{product.title}<span className={product.latest ? "new-phone" : "new-hide"}>new</span></h2>
            </span>
        </Link>
    )
}
