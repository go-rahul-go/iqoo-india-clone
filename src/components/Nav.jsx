import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./nav.css";
import { motion, useInView } from 'framer-motion';
import { FaPowerOff } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import moblogo from "../assets/nav/mob-logo.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { prodData, mobData } from '../prodData';
import { GoPlus } from "react-icons/go";
import TabProducts from './TabProducts';
import { PiDeviceMobileSpeakerBold } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu"; //cart icon
import { IoReceiptOutline } from "react-icons/io5"; //order icon
import { RiCloseLargeLine } from "react-icons/ri";

const motVar = {
    start: {
        y: "-50vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}

const navVar = {
    start: {
        y: "-50vh",
        opacity: 0,
        zIndex: 7
    },
    end: {
        y: 0,
        opacity: 1,
        zIndex: 7
    }

}

const mobVar = {
    start: {
        width: "0%",
        height: "0%",
        opacity: 0
    },
    end: {
        width: "95%",
        height: "98%",
        opacity: 1

    }
}

const mobLoginVar = {
    start: {
        y: "-200px",
        opacity: 0,
        zIndex: 7,
    },
    end: {
        y: 0,
        opacity: 1,
        zIndex: 7,
        transition: { duration: 0.4, type: "spring", stiffness: 150 }
    }
}
const Nav = ({ changeMobMenuSituation }) => {
    const [logohover, changelogohover] = useState(false);
    const [isMobMenuOpen, changeMobMenu] = useState(false);
    const [showMobProducts, changeMobProducts] = useState(false)
    const [mobLogin, changeMobLoginOpt] = useState(false)
    const inner = useRef();
    const outer = useRef();

    const inView = useInView(inner)






    const moveBack = (e) => {
        e.preventDefault();
        inner.current.scrollLeft -= inner.current.clientWidth

    }

    const moveNext = (e) => {
        e.preventDefault();
        inner.current.scrollLeft += inner.current.clientWidth;

    }

    const nav = useNavigate();
    useEffect(() => {
        inner.current.scrollLeft = 0;
        console.log(inner.current.scrollLeft)
    })
    return (
        <>
            <motion.div className='nav' >
                <div className={isMobMenuOpen ? "mob-menu-btn-hide" : 'mob-menu-btn'} onClick={() => { changeMobMenu(!isMobMenuOpen); changeMobMenuSituation(true) }}>
                    <span></span><span></span><span></span>
                </div>
                <div className={isMobMenuOpen ? "mob-menu-btn-close" : "mob-menu-btn-close-hide"} onClick={() => { changeMobMenu(false); changeMobMenuSituation(false) }}>
                    <span ></span>
                    <span ></span>
                </div>
                <Link className='logo' onMouseEnter={() => changelogohover(true)} onMouseLeave={() => changelogohover(false)} to="/">
                    <span>i</span>
                    <span id="iqoo-icon"><FaPowerOff /></span>
                    <svg width="30px" height="30px">
                        <circle r="12" cx="15" cy="15" fill="none" strokeWidth="5" stroke={logohover ? "#F3B61F" : "black"} />
                    </svg>
                    <svg width="30px" height="30px">
                        <circle r="12" cx="15" cy="15" fill="none" strokeWidth="5" stroke={logohover ? "#F3B61F" : "black"} />
                    </svg>
                </Link>
                <Link className='mob-head-logo' onClick={() => { changeMobMenu(false); changeMobMenuSituation(false) }} to="/">
                    <img src={moblogo} alt="" />
                </Link>
                <div className='nav-links'>
                    <NavLink to="/">home</NavLink>
                    <NavLink id="products-link" to="/products">products
                        <div className="all-products" ref={outer} >
                            <div id='inner-products' ref={inner}>
                                {
                                    prodData.map((item) => {
                                        return (
                                            <div className='mob-card' key={item.id} >
                                                <div className='nav-mob-pics' id={item.title === "iqoo 12" ? "iqoo12" : (item.title === "neo7 pro") ? "neo7-pro" : ""}>
                                                    {
                                                        item.images.map((image, index) => {
                                                            return (
                                                                <img src={image} alt="" key={index} style={{ zIndex: index + 1 }} className={index === (item.images.length - 2) ? "second-last" : ""} />
                                                            )
                                                        })
                                                    }

                                                </div>
                                                <p className='mob-title'>{item.title}{item.new ? <span className='new-tag'>new</span> : ""}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button onClick={(e) => moveBack(e)} className='slide-btns' id="s-p"><GrLinkPrevious /></button>
                            <button onClick={(e) => moveNext(e)} className='slide-btns' id="s-n"><GrLinkNext /></button>
                            <div className='prod-compare'>
                                <Link className='inner-prod-compare' to="/products">
                                    <span id="all-models">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    all models</Link>
                                <Link className='inner-prod-compare'>
                                    <PiDeviceMobileSpeakerBold id="compare-arrow" />compare</Link>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/estore">e-store</NavLink>
                    <NavLink >community</NavLink>
                    <NavLink>funtouch</NavLink>
                    <NavLink to="/support">support</NavLink>
                    <NavLink to="/about">about IQOO</NavLink>
                </div>
                <div className='login'>
                    <div className="login-icon"><BsChat /></div>
                    <div className="login-icon" id="user-icon"><FaRegUser />
                        <div className="login-option">
                            <Link className='login-link'><LuShoppingCart className='login-link-icon' /><p>cart</p></Link>
                            <Link className='login-link'><IoReceiptOutline className='login-link-icon' />my orders</Link>
                            <Link className='login-link'><FaRegUser className='login-link-icon' />sign in/register</Link>
                        </div>
                    </div>

                </div>
                <div className='mob-login-div'>
                    <BsChat />
                    <FaRegUser onClick={() => changeMobLoginOpt(!mobLogin)} />
                </div>
                <motion.div className={mobLogin ? "mob-login" : "mob-login-hide"} variants={mobLoginVar} initial="start" animate={mobLogin ? "end" : "start"}>
                    <RiCloseLargeLine id="mob-login-close" onClick={() => changeMobLoginOpt(false)} />
                    <Link className='mob-login-link'><LuShoppingCart className='login-link-icon' /><p>cart</p></Link>
                    <Link className='mob-login-link'><IoReceiptOutline className='login-link-icon' />my orders</Link>
                    <Link className='mob-login-link'><FaRegUser className='login-link-icon' />sign in/register</Link>
                </motion.div>
            </motion.div>

            <motion.div className={isMobMenuOpen ? "mob-menu" : "mob-menu-hide"} variants={navVar} initial="start" animate={isMobMenuOpen ? "end" : "start"} transition={{ duration: 0.4 }} >
                <Link className="mob-nav-links" onClick={() => { changeMobMenu(false); changeMobMenuSituation(false) }} to="/">
                    Home
                    <MdOutlineKeyboardArrowRight className='mob-links-icons' />
                </Link>
                <div className="mob-nav-links" >
                    <Link to="/products" onClick={() => { changeMobMenuSituation(false); changeMobMenu(false); changeMobProducts(false) }} className='mob-prod-link'>products</Link>
                    <GoPlus className='mob-links-icons' id={showMobProducts ? "rot-clock" : "rot-anti-clock"} onClick={() => changeMobProducts(!showMobProducts)} />
                </div>
                <div className={showMobProducts ? "mob-products" : "mob-products-hide"} >
                    <motion.div className='inner-mob-products'>
                        {
                            mobData.map((item, index) => {
                                return (
                                    <motion.div variants={mobVar} initial="start" animate={showMobProducts ? "end" : "start"} transition={{ duration: 0.2, type: "spring", stiffness: 80, delay: item.delay }} className='mob-prod-card' key={index} onClick={() => { nav("/products"); changeMobMenuSituation(false); changeMobMenu(false); changeMobProducts(false) }}>
                                        <div className='mob-prod-image'>
                                            <img src={item.url} alt="" />
                                        </div>
                                        <div className='mob-prod-title'>
                                            {item.title}

                                        </div>
                                        {item.new &&
                                            <div className='mob-prod-isnew'>
                                                {
                                                    "new".split("").map((letter,index) => {
                                                        return (
                                                            <p key={index}>{letter}</p>
                                                        )
                                                    })
                                                }
                                            
                                            </div>}
                                    </motion.div>
                                )
                            })
                        }

                    </motion.div>

                </div>
                <TabProducts showTab={showMobProducts} changeMobProducts={changeMobProducts} changeMobMenu={changeMobMenu} changeMobMenuSituation={changeMobMenuSituation} />

                <Link className="mob-nav-links" onClick={() => { changeMobMenu(false); changeMobMenuSituation(false) }} to="/estore">
                    e-store<MdOutlineKeyboardArrowRight className='mob-links-icons' />
                </Link>

                <Link className="mob-nav-links" onClick={() => changeMobMenu(false)}>
                    community
                    <MdOutlineKeyboardArrowRight className='mob-links-icons' />
                </Link>
                <Link className="mob-nav-links" onClick={() => changeMobMenu(false)}>
                    funtouch os
                    <MdOutlineKeyboardArrowRight className='mob-links-icons' />
                </Link>
                <Link className="mob-nav-links" onClick={() => { changeMobMenu(false); changeMobMenuSituation(false) }} to="/support" >
                    support
                    <MdOutlineKeyboardArrowRight className='mob-links-icons' />
                </Link>
                <Link className="mob-nav-links" onClick={() => { changeMobMenu(false); changeMobMenuSituation(false) }} to="/about">
                    about IQOO<MdOutlineKeyboardArrowRight className='mob-links-icons' />
                </Link>
            </motion.div>



        </>
    )
}

export default Nav