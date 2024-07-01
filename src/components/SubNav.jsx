import React, { useState } from 'react'
import "./subnav.css";
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
const SubNav = ({ name }) => {
    const [subNavOpen, changeSubNavOpen] = useState(false)
    return (

        <div className="subnav">
            <span className='mobile-name'>{name}</span>
            <div className='subnav-links'>
                <Link to={"/" + name}>overview</Link>
                <Link to={"/" + name + "/gallery"}>Gallery</Link>
                <Link to={"/" + name + "/parameter"}>parameter</Link>
                <Link to={"/" + name + "/buy"} id="buy-now-btn">buy now</Link>
            </div>
            <div className="mob-subnav-toggle" onClick={() => changeSubNavOpen(!subNavOpen)}>
                {subNavOpen ? <IoClose /> : <BsThreeDots />}
            </div>
            <motion.div className={subNavOpen ? "mob-sub-nav-menu" : "mob-sub-nav-menu-hide"} initial={{ y: "-50px", opacity: 0 }} animate={subNavOpen ? { y: 0, opacity: 1 } : { y: "-50px", opacity: 0 }}>
                <NavLink to={"/" + name}>overview</NavLink>
                <NavLink to={"/" + name + "/gallery"}>Gallery</NavLink>
                <NavLink to={"/" + name + "/parameter"}>parameter</NavLink>
                <NavLink to={"/" + name + "/buy"} id="mob-subnav-buy-now">buy now</NavLink>
            </motion.div>
        </div>


    )
}

export default SubNav