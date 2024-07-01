import React,{useContext} from 'react'
import "./z9xgallery.css"
import SubNav from '../components/SubNav'
import { z9xpcGallery,z9xmobGallery } from '../data'
import Footer from '../components/Footer'
import { Display } from '../App';
const Z9xGallery = () => {
  const display = useContext(Display)
  return (
    <section className={display?"z9x-gallery-hide":""}>
    <div className='z9x-gallery'>
      <div className="gallery-nav">
        <SubNav name={"z9x"}/>
      </div>
      <div className='z9x-pc-gallery'>
        {
          z9xpcGallery.map((item,index)=>{
            return(
              <div className='inner-z9x-pc-pic'>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='z9x-mob-gallery'>
        {
          z9xmobGallery.map((photo,index)=>{
            return(
              <div className='inner-z9x-mob-pic'>
                  <img src={photo} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
    <Footer/>
    </section>
  )
}

export default Z9xGallery;