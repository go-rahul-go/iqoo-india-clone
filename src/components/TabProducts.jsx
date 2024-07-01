import React, { useEffect, useRef } from 'react'
import "./tabProducts.css"
import { mobData } from '../prodData'
import { motion, useInView } from 'framer-motion'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineCompare } from "react-icons/md";


const tabCardVar={
    start:{
        y:"-20vh",
        opacity:0
    },
    end:{
        y:0,
        opacity:1
    }
}
const TabProducts = ({ showTab,changeMobProducts,changeMobMenu,changeMobMenuSituation }) => {

   
    const inner = useRef();
    const cardView=useInView(inner)
    const nav=useNavigate();
    const moveRight = (event) => {
        event.preventDefault();
        inner.current.scrollLeft += inner.current.clientWidth;
    }
    const moveLeft = (event) => {
        event.preventDefault();
        inner.current.scrollLeft -= inner.current.clientWidth;
    }
    useEffect(() => {
        inner.current.scrollLeft = 0
    })
    return (
        <div className={showTab ? "tab-products" : "hide-tab-products"}>
            <motion.div className='inner-tab-prod' ref={inner}>
                {
                    mobData.map((item, index) => {
                        return (
                            <motion.div className='tab-card' key={index} variants={tabCardVar} initial="start" animate={cardView?"end":"start"} transition={{duration:0.2,delay:item.delay,type:"spring",stiffness:100}} onClick={()=>{nav("/products"); changeMobProducts(false); changeMobMenu(false); changeMobMenuSituation(false)}}>
                                <div className='tab-image'>
                                    <img src={item.url} alt="" draggable="false" />
                                </div>
                                <div className='tab-txt'>
                                    <p>{item.title}</p>
                                    {item.new&&<span className='tab-isnew'>new</span>}
                                </div>
                            </motion.div>
                        )
                    })
                }
                <div className="tab-prod-compare">
                    <Link className='tab-prod-cmp-card' to="/products" onClick={()=>{ changeMobProducts(false); changeMobMenu(false); changeMobMenuSituation(false)}}><AiOutlineMobile/>all models</Link>
                    <Link className='tab-prod-cmp-card'><MdOutlineCompare />compare</Link>
                </div>
            </motion.div>
            <div className='tab-btns' id="tab-right" onClick={(e)=>moveRight(e)}><GrLinkNext /></div>
            <div className='tab-btns' id="tab-left" onClick={(e)=>moveLeft(e)}><GrLinkPrevious /></div>
        </div>
    )
}

export default TabProducts