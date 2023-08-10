import React, { useState } from 'react'
import './Footer.css'
import { MdLocationOn } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div>
            <div className="footer-container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <h4 className="reach">Reach us at...</h4>
                        <div className="icon-text">
                            <div className="icon-text-div">
                                <a href='#' className='icon'><MdLocationOn className='ic' /><span className="text">Kubwa, FCT Abuja.</span></a>
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><MdCall className='ic' /><span className="text">Give us a call</span></a><br />
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><MdEmail className='ic' /><span className="text">Send us email</span></a><br />
                            </div>
                            <div className="social-icons">
                                <a href="#" className='social-icon'><FaFacebookF /></a>
                                <a href="#" className='social-icon'><FaTwitter /></a>
                                <a href="#" className='social-icon'><FaLinkedinIn /></a>
                                <a href="#" className='social-icon'><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <h4 className="reach">Company</h4>
                        <div className="icon-text">
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Our Platforms</span></a>
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">About Us</span></a><br />
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Privacy Policy</span></a><br />
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Terms and Condition</span></a><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <h4 className="reach">Vendors</h4>
                        <div className="icon-text">
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Sellers</span></a>
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Services</span></a><br />
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Properties</span></a><br />
                            </div>
                            <div className="icon-text-div">
                                <a href='#' className='icon'><span className="text">Account</span></a><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <h4 className="reach">Our News</h4>
                        <form action="">
                            <div className="input-form-footer">
                                <input type="text" placeholder='Enter your name' value={name} name='name'
                                    className='footer-input' onChange={(e) => setName(e.target.value)} />
                                <input type="email" placeholder='Enter your email' value={email} name='email'
                                    className='footer-input' FonChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button className="btn-sub">Subscribe</button>
                        </form>
                    </div>
                    <span className="copy-right">© Copyright 2023 Pay After Salary System Limited. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
