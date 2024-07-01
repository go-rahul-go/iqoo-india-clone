import { useScroll } from 'framer-motion'
import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import gift from "../assets/welcome-gift.webp"

import "./welcomegift.css"

const style={
    position:"fixed",
    right:'10px',
    top:"20vh",
    width:"100px",
    height:"150px",
    // border:"2px solid blue",
    zIndex:"2",
   
    // dislpay:"grid",
    // placeItems:"center"
}
const imgStyle={
    width:"100%",
    height:"100%",
    objectFit:'contain'
}
const hide={
    display:"none"
}
const closeStyle={
    width:"20px",
    height:"20px",
    color:"white",
    backgroundColor:"grey",
    borderRadius:"50%",
    position:"absolute",
    top:"10px",
    left:"10px",
    display:"grid",
    placeItems:"center"
}
const WelcomeGift = () => {
    const [hideMe,seeMe]=useState(true)
  return (
    <div className={hideMe?"welcome-gift":"welcome-gift-hide"}>
        <div style={closeStyle} onClick={()=>seeMe(false)}>
            <IoIosClose/>
        </div>
        <img src={gift} alt="" style={imgStyle}/>
    </div>
  )
}

export default WelcomeGift;