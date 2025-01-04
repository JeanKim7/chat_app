import React from 'react'
import "./RightSidebar.css"
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <div className='rs'>
        <div className="rs-profile"></div>
        <img src={assets.profile_img} alt="" />
        <h3>Richard Sanford <img src={assets.green_dot} alt="" className="dot" /></h3>
        <p>Hey there, I am Richard Sanford using chat app</p>
        <hr />
        <div className="rs-media">
          <p>Media</p>
          <div>
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
            <img src={assets.pic3} alt="" />
            <img src={assets.pic4} alt="" />
            <img src={assets.pic5} alt="" />
            <img src={assets.pic6} alt="" />
          </div>
        </div>
        <button>Log Out</button>
    </div>
    

  )
}

export default RightSidebar