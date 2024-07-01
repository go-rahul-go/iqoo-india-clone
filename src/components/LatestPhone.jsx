import React, { useEffect, useRef, useState } from 'react'
import "./latestphone.css"
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaDiamond } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";


const motionVar = {
  start: {
    y: "50vh",
    opacity: 0
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 }
  }
}

const LatestPhone = ({ title, tag, imageUrl, changeTop,url }) => {
  const pc = useRef();
  const mob = useRef();
  const topRef = useRef();
const [hideScroll,updateScroll]=useState(false)
  const pcView = useInView(pc, { once: true })

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      let e1 = entries[0]
      e1.isIntersecting ? changeTop(true) : changeTop(false);
    })
    observer.observe(topRef.current)

   window.addEventListener("scroll",handleScroll)

   return ()=>{
    window.removeEventListener("scroll",handleScroll)
   }

  }, [])


  const handleScroll=(e)=>{
    updateScroll(true)
  }

  return (
    <div className='latest' id="latest-phone" ref={topRef} >
      <Link className='pc-latest-box' to={url}>
        <div className="pc-latest-pic">
          <img src={imageUrl} alt="" />
        </div>
        
        <div className='pc-latest-details' >
          <div className='inner-pld' ref={pc} >
            <h1 className='latest-title'>{title}<span className='latest-new'>5G</span></h1>
            <h2 className='latest-tag'>{tag}</h2>
            <div className='latest-links'>
              <Link className='inner-latest-link' to={url}>know more<span className='ll-icon' >
                <MdOutlineKeyboardArrowRight className="r-arrow l-icon" /><FaDiamond className='diamond l-icon' /></span></Link>
              <Link className='inner-latest-link' to={url}>shop now<span className='ll-icon' >
                <MdOutlineKeyboardArrowRight className="r-arrow l-icon" /><FaDiamond className='diamond l-icon' /></span></Link>
            </div>
          </div>
        </div>
        <div className={hideScroll?"scroll-down-hide":"scroll-down"}>
          <div className='inner-scroll-down'>
              <div id="scroll-diamond"></div>
          </div>
        </div>
      </Link>
      <Link className="mob-latest" to={url}>
        <div className='inner-pld' ref={pc} >
          <h1 className='latest-title'>{title}<span className='latest-new'>5G</span></h1>
          <h2 className='latest-tag'>{tag}</h2>
          <div className='latest-links'>
            <Link className='inner-latest-link'  to="/z9x">know more<span className='ll-icon'>
              <MdOutlineKeyboardArrowRight className="r-arrow l-icon" /><FaDiamond className='diamond l-icon' /></span></Link>
            <Link className='inner-latest-link'>shop now<span className='ll-icon'>
              <MdOutlineKeyboardArrowRight className="r-arrow l-icon" /><FaDiamond className='diamond l-icon' /></span></Link>
          </div>
        </div>
        <div className='mob-latest-pic'>
          <img src={imageUrl} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default LatestPhone;