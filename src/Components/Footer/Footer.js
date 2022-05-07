import React from 'react';
import './Footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FiYoutube} from 'react-icons/fi'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
    return (
        <div className='foter '>
            <div className='address' >
            <div>
            <h4>Address</h4>
            <p>Name:<span className='text-warning'> Prince imran</span></p>
            <p>Mirpur Dhaka 1216</p>
            <p>Gmail:imran@gmail.com</p>
            </div>
        </div>
       
            <div className='foot-info'>
                <h1 className='  mb-3'>Fancy <span className='text-warning'>Devloper</span></h1>
                <div className='  foot-link'>
                    <a href="#fb"><FaFacebookSquare></FaFacebookSquare></a>
                    <a href="#youtube"> <FiYoutube></FiYoutube> </a>
                    <a href="#twiter"><ImTwitter></ImTwitter></a>
                   
                </div>
                <p  className='mt-5'>All right reserved <span className='text-danger'>&copy; copy </span> right princes 2022</p>
              
                
        </div>
        
        </div>
    );
};

export default Footer;