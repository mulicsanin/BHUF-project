import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/Logo.png';


const handleBurger = () => {

   
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
 
    if ($navbarBurgers.length > 0) {
  
      
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
         
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    };
}

export default class Navbar extends Component {
    render() {
        return (
            <nav className="section navbar is-transparent" id="Navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="#Hero">
                            <a className="navbar-item">
                                <Image src={Logo} alt="LOGO" width={170} height={68} className='image' />
                            </a>
                        </Link>
                        <a role="button" onClick={handleBurger} className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className="navbar-menu " id="navMenu">
                        <div className="navbar-start">
                            <Link href="#">
                                <a className="navbar-item">Home</a>
                            </Link>
                            <Link href="#AboutUs">
                                <a className="navbar-item">About us</a>
                            </Link>
                            <Link href="#EventShowcase">
                                <a className="navbar-item">Events</a>
                            </Link>
                            <Link href="#Activity">
                                <a className="navbar-item">Organization</a>
                            </Link>
                            <Link href="#Footer">
                                <a className="navbar-item">Contact us</a>
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <Link href="#Footer">
                                <a className="navbar-item">
                                    <button className="button">
                                        Become a Member
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
