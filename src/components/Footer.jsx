import React, { useState } from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const purchase = ["my orders", "privacy terms for e-store", "payment terms and policies"]
const support = ["FAQSs", "service center", "IMEI authentication", "query of spare parts and price"]
const about = ["info", "terms and condition", "equal opportunity policy"]


const Footer = () => {
    const [footMenu, changeFootMenu] = useState("")
    const changeMenu = (menu) => {
        if (menu === footMenu) {
            changeFootMenu("")
        }
        else {
            changeFootMenu(menu)

        }

    }
    return (
        <footer className='footer'>
            <div className="pc-footer">
                <div className='pc-foot-links'>
                    <div className="inner-pc-foot-links">
                        <p className='foot-title'>purchase online</p>
                        <div className='foot-links-box'>
                            {
                                purchase.map((item, index) => {
                                    return (
                                        <Link className="foot-link" key={index}>{item}</Link>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div className="inner-pc-foot-links">
                        <p className='foot-title'>support</p>
                        <div className='foot-links-box'>
                            {
                                support.map((item, index) => {
                                    return (
                                        <Link className="foot-link" key={index} to="/support">{item}</Link>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="inner-pc-foot-links">
                        <p className='foot-title'>about</p>
                        <div className='foot-links-box'>
                            {
                                about.map((item, index) => {
                                    return (
                                        <Link className="foot-link" key={index} to="/about">{item}</Link>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className='pc-foot-contact'>
                    <div className='pc-phone-number'>
                        <div id="phone-icons"><IoCallOutline id="call-icon"/>24*7</div>
                        <div id="landline">1800-555-2xx5</div>
                    </div>
                    <Link className='pc-whatsemail'>
                            <IoChatbubbleOutline className="whats-icon"/>
                            <p>whatspp assitance (8AM - 8PM human assistance)</p>
                    </Link>
                    <Link className='pc-whatsemail'>
                            <MdOutlineMailOutline className="whats-icon"/>
                            <p>e-mail us (reply in 24 hours)</p>
                    </Link>
                    <div className='pc-social-media'>
                        <div id="follow-us"><CiBookmarkPlus className="whats-icon"/>follw us</div>
                        <div className='pc-social-icons'>
                            <div  className='sm-icons'><FaXTwitter/></div>
                            <div  className='sm-icons'><AiFillInstagram/></div>
                            <div  className='sm-icons'>< FaFacebookF/></div>
                            <div  className='sm-icons'><FaYoutube/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mob-footer">
                <div className="mob-foot-link" onClick={() => changeMenu("purchase")}>
                    <p>purchase</p><FaPlus className='mob-foot-expand' />
                </div>
                <div className={footMenu === "purchase" ? "foot-menu-visible" : "foot-menu-hide"}>
                    {
                        purchase.map((item, index) => {
                            return (
                                <Link className='mob-link' key={index}>{item}</Link>
                            )
                        })
                    }
                </div>
                <div className="mob-foot-link" onClick={() => changeMenu("support")}>
                    <p>support</p><FaPlus className='mob-foot-expand' />
                </div>
                <div className={footMenu === "support" ? "foot-menu-visible" : "foot-menu-hide"}>
                    {
                        support.map((item, link) => {
                            return (
                                <Link className='mob-link' key={link} to="/support">{item}</Link>
                            )
                        })
                    }
                </div>
                <div className="mob-foot-link" onClick={() => changeMenu("about")}>
                    <p>about</p><FaPlus className='mob-foot-expand' />
                </div>
                <div className={footMenu === "about" ? "foot-menu-visible" : "foot-menu-hide"}>
                    {
                        about.map((item, link) => {
                            return (
                                <Link className='mob-link' key={link} to="/about">{item}</Link>
                            )
                        })
                    }
                </div>
                <div className='mob-foot-contact'>
                    <div className="helpline">
                        <span className='phone-contact-point'><IoCallOutline className="foot-icons" /> 24*7</span>
                        <p id="phone-number">1800-572-4700</p>
                    </div>
                    <div className='whatsapp'>
                        <Link className='contact-link'><IoChatbubbleOutline className='foot-icons' />whatsapp (8Am - 8Pm human assistance)</Link>
                    </div>
                    <div className='email'>
                        <Link className='contact-link'><MdOutlineMailOutline className='foot-icons' />email us (reply in 24h)</Link>
                    </div>
                    <div className="social-media">
                        <span className='phone-contact-point'><CiBookmarkPlus className="foot-icons" /> follow us </span>
                        <div className="social-media-icons">
                            <Link className='inner-social-media-icons'><FaTwitter className='smi' /></Link>
                            <Link className='inner-social-media-icons'><AiFillInstagram className='smi' /></Link>
                            <Link className='inner-social-media-icons'><FaFacebookF className='smi' /></Link>
                            <Link className='inner-social-media-icons'><FaYoutube className='smi' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='pc-terms'>
                <Link className='term-box company'>vivo Mobile India Pvt Ltd. All rights reserved.</Link>
                <div className='other-terms'>
                    <Link className='term-box'>privacy policy</Link>
                    <Link className='term-box'>Cookies policy</Link>
                    <Link className='term-box'>Warranty terms</Link>
                    <Link className='term-box'> privacy support</Link>
                </div>
            </div>        
        </footer>
    )
}

export default Footer