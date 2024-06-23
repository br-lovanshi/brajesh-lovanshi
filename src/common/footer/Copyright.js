import React from 'react'
import { FiCode, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail, FiTwitter, FiVoicemail } from 'react-icons/fi';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                            <li><Link to="mailto:brajeshlovanshi2001@gmail.com"><FiMail /></Link></li>
                            <li><Link to="https://github.com/br-lovanshi"><FiGithub /></Link></li>
                            <li><Link to="https://www.linkedin.com/mynetwork/grow/"><FiLinkedin /></Link></li>
                            <li><Link to="https://leetcode.com/u/brajesh_lovanshi1/"><FiCode /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text">© Brajesh Lovanshi {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;