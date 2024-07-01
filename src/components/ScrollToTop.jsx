import React from 'react'
import "./scrollToTop.css"
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';


const ScrollToTop = ({atTop,hrefid}) => {
  return (
    <a className={atTop?"scroll-top-hide":'scroll-to-top'} href={hrefid}>
        <IoIosArrowUp id="up-icon"/>
    </a>
  )
}

export default ScrollToTop
