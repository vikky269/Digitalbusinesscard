import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'

export function Footer() {
    

    return (
        <>

         <div className="footer--container">
              <FaGithub  className='footer-icon'/>
              <FaLinkedin className='footer-icon'/>
         </div>
            
        </>
    )
}
