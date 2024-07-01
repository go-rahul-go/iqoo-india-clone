import React, { useContext, useEffect,useState } from 'react'
import "./support.css"
import { Display } from '../App'
import { supporticons, supportservices, supportcontact } from '../data'
import { IoMdSearch } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ContactBox from '../components/ContactBox';
import ShowContact from '../components/ShowContact';
const Support = () => {

    const displaySettings = useContext(Display);
    const [showContacts,updateShowContact]=useState(false);
    useEffect(()=>{
        window.scrollTo(0,0)
        document.title="support | iQOO india"

        return()=>{
            document.title="iQOO india"
        }
    },[])
    return (
        <section className={displaySettings ? "support-hide" : "support"}>
            <div className='support-pic'>

                <div className='support-search'>
                    <h1>care with joy</h1>
                    <div className='support-searchbar'>
                        <form className='support-search-form'>
                            <input type="text" placeholder='search for support' />
                        </form>
                        <div className='searchbar-icon'>
                            <IoMdSearch />
                        </div>
                    </div>
                </div>
            </div>
            <div className='support-hosp'>
                <div className='support-services'>
                    {
                        supporticons.map((item, index) => {
                            return (
                                <div className='support-services-card'>
                                    <div className="ssc-pic">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="service-activity">
                    {
                        supportservices.map((item, index) => {
                            return (
                                <div className="service-activity-card" key={index}>
                                    <div className="service-activity-image">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="service-activity-bottom">
                                        <h3>{item.title}</h3>
                                        <p>{item.p}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <SupportFAQ />
            <SupportContact />
            <ContactBox updateShowContact={updateShowContact} showContacts={showContacts} />
            <ShowContact visibility={showContacts} updateShowContact={updateShowContact} />
            <Footer/>
        </section>
    )
}

export default Support;


function SupportFAQ() {
    return (
        <div className='s-faq'>
            <h2>FAQs</h2>
            <div className='s-faq-questions'>
                <div className='inner-s-faq'>
                    <Link className='faq-ques'>
                        <p>how to i find my phone?</p>
                        <FaChevronRight />
                    </Link>
                    <Link className='faq-ques'>
                        <p>how to use 5G network</p>
                        <FaChevronRight />
                    </Link>
                    <Link className='faq-ques'>
                        <p>what should i do if i forget lock screen password?</p>
                        <FaChevronRight />
                    </Link>
                    <Link className='faq-ques'>
                        <p>how to register iQOO account?</p>
                        <FaChevronRight />
                    </Link>
                    <Link className='faq-ques'>
                        <p>how to set app lock</p>
                        <FaChevronRight />
                    </Link>
                </div>
                <div id="faq-learn-more">
                    <p>learn more</p>
                    <span id="arrow-icon">
                        <FaChevronRight />
                    </span>
                </div>
            </div>


        </div>
    )
}


function SupportContact() {
    return (
        <div className='support-contact'>
            <h2>Contact Us</h2>
            <div className='support-box'>
               
                {
                    supportcontact.map((item, index) => {
                        return (
                            <div className="support-contact-box">
                                <div className='scb-icon'>
                                        <img src={item.url} alt="" />
                                </div>
                                <div className='scb-txt'>
                                    <p>{item.t1}</p>
                                    <p className='s-light'>{item.t2}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}