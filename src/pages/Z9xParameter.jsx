import React, { useState,useContext } from 'react'
import SubNav from '../components/SubNav'
import "./z9xparameter.css"
import green from "../assets/z9x/parameter/green.png"
import black from "../assets/z9x/parameter/black.png"
import dimen from "../assets/z9x/parameter/body-dimension.jpg"
import { Display } from '../App';
import Footer from '../components/Footer'
const Z9xParameter = () => {
    const [color, changeColor] = useState("green")
    const display = useContext(Display)
    return (
        <div className={display?'z9x-parameter-hide':'z9x-parameter'}>
            <div className="para-gallery-nav">
                <SubNav name={"z9x"} />
            </div>
            <div className='z9x-colors'>
                <h2 className='parameter-title'>product color</h2>
                <div className='z9x-parameter-pic'>
                    {color === "green" ? <img src={green} alt="" id="z9x-green-phone" /> : <img src={black} alt="" id={color === "black" ? "z9x-black-phone" : ""} />}
                </div>
                <div className='z9x-color-buttons'>
                    <div className='z9x-color-select' onClick={() => changeColor("green")}>
                        <span id="z9x-green-btn" className={color==="green"?"active-outline":"disable-outline"}></span>
                        <p>tornado green</p>
                    </div>
                    <div className='z9x-color-select' onClick={() => changeColor("black")}>
                        <span id="z9x-black-btn" className={color==="black"?"active-outline":"disable-outline"}></span>
                        <p>storm grey</p>
                    </div>
                </div>
            </div>
            <Body />
            <Basic />
            <Z9xDisplay />
            <DigiCamera/>
            <Connectivity/>
            <Network/>
            <Sensors/>
            <Location/>
            <Additional/>
            <Footer/>
        </div>
    )
}

export default Z9xParameter;


function Body() {
    return (
        <div className='z9x-specs'>
            <h2 className='parameter-title'>body</h2>
            <div className='inner-z9x-specs'>
                <div id="dimension">
                        <img src={dimen} alt="" />
                </div>
                <table>
                    <tr>
                        <td className='dimension-title'>camera</td>
                        <td className='dimension-spec'>Rear: 50 MP AI Camera (main) + 2 MP (Bokeh) + 8 MP Front Camera | *The pixel value may vary under different camera modes, and is subject to actual usage.</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>apperture</td>
                        <td className='dimension-spec'>Rear: main 50 MP f/1.8 + 2 MP f/2.4 | Front: main f/2.05</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>flash</td>
                        <td className='dimension-spec'>Rear flash</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Scene Modes</td>
                        <td className='dimension-spec'>Rear: Night, Portrait, Photo, Video, 50 MP, Panorama, Slo-mo, Time-lapse, Pro, Live photo, Documents | Front: Portrait, Photo, Video, Live Photo</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function Basic() {
    return (
        <div className='z9x-specs'>
            <h2 className='parameter-title'>basic</h2>
            <div className='inner-z9x-specs'>
                <table>
                    <tr>
                        <td className='dimension-title'>Processor</td>
                        <td className='dimension-spec'>Snapdragon 6 Gen 1 5G Mobile Platform</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>RAM</td>
                        <td className='dimension-spec'>4GB | 6GB | 8GB</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>ROM</td>
                        <td className='dimension-spec'>128GB</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Battery</td>
                        <td className='dimension-spec'>6000 mAh (TYP) | 5870 mAh (MIN)</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Fast Charging</td>
                        <td className='dimension-spec'>44W | *iQOO Z9x 5G is equipped with a vivo standard charger which supports a charging power of up to 44W.﻿ The actual charging power is dynamically adjusted as the scene changes, and subject to actual use.</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Color</td>
                        <td className='dimension-spec'>Tornado Green | Storm Grey</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Operating System</td>
                        <td className='dimension-spec'>Funtouch OS 14 based on Android 14</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function Z9xDisplay() {
    return (
        <div className='z9x-specs'>
            <h2 className='parameter-title'>display</h2>
            <div className="inner-z9x-specs">
            <table>
                    <tr>
                        <td className='dimension-title'>Size</td>
                        <td className='dimension-spec'>17.06cm (6.72-inch) | *Measured diagonally, the screen size is 6.72-inch in the full rectangle. Actual display area is slightly smaller.</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Resolution</td>
                        <td className='dimension-spec'>2408x1080</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Type</td>
                        <td className='dimension-spec'>LCD</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Touch Screen</td>
                        <td className='dimension-spec'>Capacitive multi-touch</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function DigiCamera(){
    return(
        <div className='z9x-specs'>
            <h2 className='parameter-title'>digital camera</h2>
            <div className='inner-z9x-specs'>
            <table>
                    <tr>
                        <td className='dimension-title'>Camera</td>
                        <td className='dimension-spec'>Rear: 50 MP AI Camera (main) + 2 MP (Bokeh) + 8 MP Front Camera | *The pixel value may vary under different camera modes, and is subject to actual usage.</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Aperture</td>
                        <td className='dimension-spec'>Rear: main 50 MP f/1.8 + 2 MP f/2.4 | Front: main f/2.05</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Flash</td>
                        <td className='dimension-spec'>Rear flash</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Scene Modes</td>
                        <td className='dimension-spec'>Rear: Night, Portrait, Photo, Video, 50 MP, Panorama, Slo-mo, Time-lapse, Pro, Live photo, Documents | Front: Portrait, Photo, Video, Live Photo</td>
                    </tr>
                   
                </table>
            </div>
        </div>
    )
}

function Connectivity(){
    return(
        <div className='z9x-specs'>
            <h2 className='parameter-title'>connectivity</h2>
            <div className='inner-z9x-specs'>
                <table>
                    <tr>
                        <td className='dimension-title'>Wi-Fi</td>
                        <td className='dimension-spec'>Wifi 5</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>Bluetooth</td>
                        <td className='dimension-spec'>Bluetooth 5.1</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>USB</td>
                        <td className='dimension-spec'>Type-C</td>
                    </tr>
                    <tr>
                        <td className='dimension-title'>GPS</td>
                        <td className='dimension-spec'>Supported</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function Network(){
    return(<div className='z9x-specs'>
        <h2 className='parameter-title'>network</h2>
        <div className='inner-z9x-specs'>
            <table>
                <tr>
                    <td className='dimension-title'>SIM Slot Type</td>
                    <td className='dimension-spec'>1 nano SIM + 1 nano SIM(Hybrid)</td>
                </tr>
                <tr>
                    <td className='dimension-title'>Standby Mode</td>
                    <td className='dimension-spec'>Dual SIM Dual Standby (DSDS)</td>
                </tr>
                <tr>
                    <td className='dimension-title'>2G GSM</td>
                    <td className='dimension-spec'>850/900/1800MHz</td>
                </tr>
                <tr>
                    <td className='dimension-title'>3G WCDMA</td>
                    <td className='dimension-spec'>B1/B5/B8</td>
                </tr>
                <tr>
                    <td className='dimension-title'>4G FDD-LTE</td>
                    <td className='dimension-spec'>B1/B3/B5/B8/B28B</td>
                </tr>
                <tr>
                    <td className='dimension-title'>4G TDD-LTE</td>
                    <td className='dimension-spec'>B38/B40/B41</td>
                </tr>
                <tr>
                    <td className='dimension-title'>5G</td>
                    <td className='dimension-spec'>n1/n3/n5/n8/n28B/n40/n77(3300-3800MHz)/n78</td>
                </tr>
            </table>
        </div>
    </div>)
    
}

function Sensors(){
    return(
        <div className='z9x-specs'>
            <h2 className='parameter-title'>sensors</h2>
        <div className='inner-z9x-specs'>
            <table>
                <tr>
                    <td className='dimension-title'>Accelerometer</td>
                    <td className='dimension-spec'>Supported</td>
                </tr>
                <tr>
                    <td className='dimension-title'>Ambient light sensor</td>
                    <td className='dimension-spec'>Supported</td>
                </tr>
                <tr>
                    <td className='dimension-title'>Proximity Sensor</td>
                    <td className='dimension-spec'>Supported</td>
                </tr>
                <tr>
                    <td className='dimension-title'>E-compass</td>
                    <td className='dimension-spec'>Supported</td>
                </tr>
                <tr>
                    <td className='dimension-title'>Fingerprint</td>
                    <td className='dimension-spec'>Side-mounted fingerprint sensor</td>
                </tr>
                <tr>
                    <td className='dimension-title'>Gyroscope sensor</td>
                    <td className='dimension-spec'>Supported</td>
                </tr>
            </table>
        </div>
        </div>
    )
}

function Location(){
    return(
        <div className='z9x-specs'>
            <h2 className='parameter-title'>location</h2>
        <div className='inner-z9x-specs'>
            <table>
                <tr>
                    <td className='dimension-title'>sensors</td>
                    <td className='dimension-spec'>GPS;GLONASS;GALILEO;BeiDou;GNSS, QZSS</td>
                </tr>
               
            </table>
        </div>
        </div>
    )
}

function Additional()
{
    return(
        <div className='z9x-specs'>
            <h2 className='parameter-title'>additional features</h2>
        <div className='inner-z9x-specs'>
            <table>
                <tr>
                    <td className='dimension-title'>Country of Origin</td>
                    <td className='dimension-spec'>India</td>
                </tr>
               
            </table>
        </div>
        </div>
    )
}