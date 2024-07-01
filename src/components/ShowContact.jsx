import React from 'react'
import "./showContact.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const variant = {
    start: {
        y: "-20vh",
        opacity: 0,
        borderRadius: "20px"
    },
    end: {
        y: 0,
        opacity: 1,
        borderRadius: "20px",
        transition: { duration: 1, type: "spring", stiffness: 160 }

    },
    exit: {
        y: "-20vh",
        opacity: 0,
        borderRadius: "20px",

    }
}
const ShowContact = ({ visibility, updateShowContact }) => {
    return (
        <AnimatePresence>
            <motion.div className={visibility ? 'contact-pop' : "hide-contact-pop"} key={visibility} variants={variant} initial="start" animate={visibility ? "end" : "start"} exit="exit">
                <IoIosCloseCircleOutline id="contact-close-btn" onClick={() => updateShowContact(false)} />

                <div className="show-contact-point">
                    <div className='scp-icon'>
                        <IoCallOutline />
                    </div>
                    <span>24*7</span>
                    <span id="scp-phone">1800-572-4700</span>
                </div>
                <div className="show-contact-point">
                    <div className='scp-icon'>
                        <FaWhatsapp />
                    </div>
                    <span>whatsapp assistance (8AM - 8PM human assistance)</span>

                </div>
                <div className="show-contact-point">
                <div className='scp-icon'>
                        <MdOutlineEmail />
                    </div>
                    <span>e-mail us (reply in 24 hours)</span>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default ShowContact