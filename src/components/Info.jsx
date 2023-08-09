import React from 'react'
import victorimg from "../images/victor.jpg"
import {FaEnvelope , FaLinkedin} from 'react-icons/fa'


export function Info() {
    

    return (
        <>
        <div className="info">
            <img  src= {victorimg}    className='info-img'/>
            <h1 className='info-text-primary'>Emanuele Del Monte</h1>
            <p className='info-text-secondary'>Junior Front-End developer</p>
            <p className='info-email'>viktorefi2001@gmail.com</p>
            <div className="info-links">
                <button className='info-email-btn'> <FaEnvelope className='envelope' />Email</button>
                <button className='info-linkedin-btn'><FaLinkedin className='linkedin' />Linkedin</button>
            </div>
        </div>
        </>
    )
}
