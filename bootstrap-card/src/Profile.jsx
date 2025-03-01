
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-50 border " style={{marginTop:"5%"}}>
      <div className="row w-100 ">

      <div className='col-md-6 flex-column justify-content-center ' style={{marginTop:"95px"}}>
          <h1>Hi , Hi I'm Harshil Sonar </h1>
          <p className='text-muted'>A freelance Web developer from London.I convert custom web design to bootstrap templates</p>
          <p className='text-muted'>I make YouTube videos and writing Blog</p>
          <button className="btn btn-primary" >I'm AVAILABLE</button>
          <div className="mt-3 ">
          <FaFacebookF  />
          <FaTwitter style={{marginLeft:"15px"}} />
          <FaSquareInstagram  style={{marginLeft:"15px"}}/>
          <FaSquareGithub style={{marginLeft:"15px"}}/>
          </div>
        </div>

      <div className='col-md-6  justify-content-center' >
         <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bae768161001d967d45.png" alt=""  className="img-fluid rounded-circle" style={{ maxWidth: "400px" }} />
        </div>

      </div>
    </div>
  )
}

export default Profile