import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>

            <div className='social-media'>
                <InstagramIcon className='icon'/>
                <TwitterIcon className='icon'/>
                <FacebookIcon className='icon'/>
                <LinkedInIcon className='icon'/>
            </div>
            <p> &copy; 2021 kerimpizza.com</p> 
            
        </div>
    )
}

export default Footer
