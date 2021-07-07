import React, { Component } from 'react'
import aboutImage from '../public/images/group_Photo.png';
import Image from 'next/image';
export default class AboutUs extends Component {
    render() {
        return (
            <section className="section" id="AboutUs">
                <div className="container">
                    <div className="columns">
                        <div className="column" style={{display:'flex', alignItems:'center'}}>
                            <div className="aboutUs">
                                <p className="title">Lorem dolert ipsum <br/> dolor sit amet enim nunc?</p>
                                <p className="about-text">Massa elit arcu diam enim nunc ipsum at libero nec. Lectus non ullamcor est orci integer tempor, et pharetra pharetra. Maecenas morbi a blandit aliquet enim consectetur convallis. Diam mauris sed diam elit donec orci malesuada eu. Neque, turpis aliquam metus, morbi duis vitae vel eros, vitae aliquet enim consectetur. </p>
                                <button className="button is-info">Learn More About Us</button>
                            </div>
                        </div>
                        <div className="column">
                            <Image src={aboutImage} width={660} height={520}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
