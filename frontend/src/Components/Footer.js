import React from 'react';
import img1 from '../Assets/qr.png';
import './All_Style.css';

function Footer() {
    return (
        <div class="footer">
            <div>
                <div>
                    {/* <h1>Contact</h1>
                    <p>Never Want To Miss A Camp Spot Ever</p>
                    <div>
                        <p>Online Course Catalogue</p>
                        <p>Book a Camp</p>
                        <p>Camp locations</p>
                        <p>Summer camps</p>
                    </div> */}

                    <img className='qr' src={img1} alt="qr" />

                </div>

                <div id="line2"></div>

                <div>
                    <div>
                        <p>Address :</p>
                        <p>123 Anjaanpir Chowk, Hajipur, Bihar</p>
                    </div>

                    <div>
                        <p>E-mail :</p>
                        <p>Archerfoundation@gmail.com</p>
                    </div>

                    <div>
                        <p>Mobile :</p>
                        <p>(+91) 74850 60789</p>
                    </div>

                    <div>
                        <p>Instagram :</p>
                        <p>@Archer_Foundation</p>
                    </div>

                    <div>
                        <p>Facebook :</p>
                        <p>Archer_Foundation.com</p>
                    </div>
                </div>
            </div>

            <div>
                <p>@2024 Archer. All rights reserved.</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Design & Develop By<a href='https://www.linkedin.com/in/asifalam26/'><strong style={{fontSize: "1.5rem", textDecoration: "none"}} > Asif</strong></a></p>
            </div>
        </div>
    );
}

export default Footer;
