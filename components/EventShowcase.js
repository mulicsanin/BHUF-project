import React, { Component } from 'react'
import Image from 'next/image';
import eventVideo1 from '../public/images/event-video-1.png'
import eventVideo2 from '../public/images/event-video-2.png'
import eventVideo3 from '../public/images/event-video-3.png'

export default class EventShowcase extends Component {
    render() {
        return (
            <section className="section" id="EventShowcase">
                <div className="container" style={{borderTop: '1px solid #eeeeee'}}>
                    <p className="tit">EVENT SHOWCASE</p>
                    <div className="columns">
                        <div className="column" style={{marginBottom:'50px'}}>
                            <div className="card">
                                <div className="card-image">
                                    <Image src={eventVideo1} width={432} height={250}/>
                                </div>
                                <div className="content">
                                    <p className="title">Dictum proin nibh amet</p>
                                    <p className="subtitle">Massa elit arcu diam enim nunc ipsum at libero nec.</p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <Image src={eventVideo2} width={432} height={250}/>
                                </div>
                                <div className="content">
                                    <p className="title">Semper turpis nulla vel</p>
                                    <p className="subtitle">Diam enim nunc ipsum at libero nec.</p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <Image src={eventVideo3} width={432} height={250}/>
                                </div>
                                <div className="content">
                                    <p className="title">Donec ultrices tristique amet</p>
                                    <p className="subtitle">Erat neque aenean libero a sapien.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button className="button is-info has-text-centered">View All Events</button>
                </div>
            </section>
        )
    }
}
