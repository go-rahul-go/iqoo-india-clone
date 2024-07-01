import React from 'react'
import "./otherscrolltotop.css"
import { FaChevronUp } from "react-icons/fa6";

const OtherScrollToTop = ({atTop,hrefid}) => {
  return (
    <a className={atTop?"other-top":"other-top-hide"} href={hrefid}>
        <FaChevronUp/>
    </a>
  )
}

export default OtherScrollToTop;