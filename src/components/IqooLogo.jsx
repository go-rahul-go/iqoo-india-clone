import React from 'react'
import "./iqoologo.css"
import { FaPowerOff } from "react-icons/fa";
const IqooLogo = ({color,rad,size,border}) => {
  return (
    <div className='iqoo-logo'>
        <span>i</span>
        <FaPowerOff style={{color:color}} id="iqoo-power-icon"/>
        <svg width={size} height={size}>
            <circle r={rad} cx={size/2} cy={size/2} fill="none" strokeWidth={border} stroke={color}/>
        </svg>
        <svg width={size} height={size}>
            <circle r={rad} cx={size/2} cy={size/2} fill="none" strokeWidth={border} stroke={color}/>
        </svg>
    </div>
  )
}

export default IqooLogo;