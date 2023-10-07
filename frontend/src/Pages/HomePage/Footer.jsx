// import React from 'react';
// import './footer.css';
// export default function Footer() {
//   return (
//     <div>
//       {/* Footer Container */}
//       <footer style={{ backgroundColor: '#5A287D', color: 'white', padding: '20px' }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <h4>Contact Us</h4>
//               <p>Email: example@example.com</p>
//               <p>Phone: +123-456-7890</p>
//             </div>
//             <div className="col-md-4">
//               <h4>Resources</h4>
//               <p>Resource Center</p>
//               <p>Testimonials</p>
//               <p>STV</p>
//             </div>
//             <div className="col-md-4">
//               <h4>Follow Us</h4>
//               <ul className="list-unstyled">
//                 <li>
//                   <a href="https://www.facebook.com/">
//                     <i className="fab fa-facebook-f"></i> Facebook
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://twitter.com/">
//                     <i className="fab fa-twitter"></i> Twitter
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.instagram.com/">
//                     <i className="fab fa-instagram"></i> Instagram
//                   </a>
//                 </li>
//                 {/* Add more social media links here */}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* Line separator */}
//         <hr style={{ borderTop: '3px solid white' }} />
//         {/* Copyright with Privacy, Security, Terms and Conditions, and Cookies */}
//         <div className="text-center mt-3 footer-text">
//           &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved. Privacy, Security, Terms and Conditions, Cookies
//         </div>
//       </footer>
//     </div>
//   );
// }


// Footer.js

import React from 'react';
import './footer.css';

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
                        <a href='/employer'>Phone:9908877902</a>
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