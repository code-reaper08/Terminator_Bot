import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-item'>
                        <div className='sb_footer-links-item_div'>
                            <h4>For Business</h4>
                            <a href='/employer'>Employer</a>
                            <a href='/employer'>HR</a>
                            <a href='/employer'>Manager</a>
                        </div>
                    </div>
                    <div className='sb_footer-links-item_div'>
                        <h4>Locations</h4>
                        <a href='https://jobs.natwestgroup.com/pages/chennai'>Chennai</a>
                        <a href='https://jobs.natwestgroup.com/pages/bengaluru'>Bengaluru</a>
                        <a href='https://jobs.natwestgroup.com/pages/delhi-and-gurugram#:~:text=Our%20base%20in%20Gurugram%20is,ferry%20employees%20to%20our%20location.'>Gurugram</a>
                    </div>
                    <div className='sb_footer-links-item_div'>
                        <h4>Contact Us</h4>
                        <a href='/employer'>Email:terminatorbot@gmail.com</a>
                        <a href='/employer'>Phone: 9908877902</a>
                        <a href='/employer'>FAQs</a>
                        <a href='/employer'>Services</a>
                    </div>
                    <div className='sb_footer-links-item_div'>
                        <h4>Social Media</h4>
                       
                            <a href='https://www.facebook.com/NatWest/'>Facebook</a>
                            <a href='https://twitter.com/NatWestGroup'>Twitter</a>
                            <a href='https://www.linkedin.com/company/natwest'>LinkedIn</a>
                            <a href='https://www.instagram.com/natwest/?hl=en'>Instagram</a>
                        
                    </div>
                </div>
                <hr />
                <div className='sb_footer-below'>
                    <div className='sb_footer-links-copyright'>
                        <p className='copyright-text'>© 2023 Terminator Bot. All rights reserved.</p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/terms" style={{ marginLeft: '10px' }}><div><p>Privacy</p></div></a>
                        <a href="/terms" style={{ marginLeft: '10px' }}><div><p>Security</p></div></a>
                        <a href="/terms" style={{ marginLeft: '10px' }}><div><p>Cookies Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}