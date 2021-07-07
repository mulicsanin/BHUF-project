import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Logo2 from '../public/images/Logo2.png';
import Image from 'next/image';
export default class Footer extends Component {
    render() {
        return (
            <footer id="Footer">
                <div className="foot-up">
                    <div className="up-text">
                        <p className="title">Join Our Comunity</p>
                        <p className="subtitle">Followers across the globe</p>
                        <button className="button is-medium is-warning"><FontAwesomeIcon icon={faInstagram} style={{ color: '#112e66', height:'20px', marginRight:'10px'}}/>{' '} Follow Us</button>
                    </div>
                </div>
                
                <section className="section foot-down">
                    <div className="container">
                        <div className="foot-d"> 
                            <div className="foot-logo">
                                <Image src={Logo2} width={205} height={85} />
                                <p>Eget faucibus id feugiat nunc, sit dis augue nisi. Nulla nisl donec faucibus eget porta diam suspendisse. Pretium porttitor nunc quam vel. Mauris platea eget dictum volutpat.</p>
                            </div>
                            <div className="foot-text">
                                <div className="summary">
                                    <a className="sum-title">About</a>
                                    <a className="sum-text">About us</a>
                                    <a className="sum-text">How We Work</a>
                                    <a className="sum-text">Board Members</a>
                                </div>
                                <div className="summary">
                                    <a className="sum-title">Events</a>
                                    <a className="sum-text">Activities</a>
                                    <a className="sum-text">Coming Events</a>
                                    <a className="sum-text">Previous Events</a>
                                </div>
                                <div className="summary">
                                    <a className="sum-title">Organization</a>
                                    <a className="sum-text">Our organization</a>
                                    <a className="sum-text">Local Organization</a>
                                    <a className="sum-text">Companies</a>
                                    <a className="sum-text">Member</a>
                                </div>
                                <div className="summary">
                                    <a className="sum-title">Contact Us</a>
                                    <a className="sum-text">Get In Touch</a>
                                    <a className="sum-text"></a>
                                    <a className="sum-text" style={{color:'#112E66'}}>Follow us on:</a>
                                    <a className="sum-icon">
                                        <FontAwesomeIcon icon={faFacebook} style={{color:'#59A0D5', height:'20px'}}/>
                                        <FontAwesomeIcon icon={faInstagram} style={{color: '#59A0D5', height:'20px'}}/>
                                        <FontAwesomeIcon icon={faLinkedin} style={{color: '#59A0D5', height:'20px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                    Copyright © 2020 by <span style={{color: '#112e66'}}>BHUF</span> . All Rights Reserved 
                    </div>
                </section>
            </footer>
        )
    }
}
