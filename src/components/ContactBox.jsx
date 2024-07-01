import React from 'react'
import "./contactbox.css"
import { TbMessageChatbot } from "react-icons/tb";

const ContactBox = ({updateShowContact,showContacts}) => {
  return (
    <div className='contact-box' onClick={()=>updateShowContact(!showContacts)}>
      <TbMessageChatbot/>
    </div>
  )
}

export default ContactBox;