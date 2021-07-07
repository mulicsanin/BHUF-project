import React, { Component } from 'react'
import friend1 from '../public/images/friends/diasoft_1.png';
import friend2 from '../public/images/friends/qatar-airways-1.png';
import friend3 from '../public/images/friends/jetblue-airways1.png';
import friend4 from '../public/images/friends/forte-sweden1.png';
import friend5 from '../public/images/friends/iatan1.png';
import friend6 from '../public/images/friends/roosevelt_1.png';
import Image from 'next/image';

export default class Friends extends Component {
    render() {
        return (
            <section className="section" id="Friends">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                           <p>Friend of BHEF</p>
                            <div className="friends">
                                <Image src={friend1}/>
                                <Image src={friend2}/>
                                <Image src={friend3}/>
                                <Image src={friend4}/>
                                <Image src={friend5}/>
                                <Image src={friend6}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
