import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowAltCircleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import activity1 from '../public/images/ourActivity/Activity1.png'
import activity2 from '../public/images/ourActivity/Activity2.png'
import activity3 from '../public/images/ourActivity/Activity3.png'

export default class Acitivty extends Component {
    render() {
        return (
           <section className="section" id="Activity">
               <div className="container">
                   <div className="activity-slider">
                       <p>Our Activity</p>
                       <div className="buttons">
                            <buton className="button is-info is-light"> <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#ffffff', height:'20px'}}/> </buton>
                            <button className="button is-info"> <FontAwesomeIcon icon={faAngleRight} style={{ color: '#ffffff', height:'20px'}}/></button>
                       </div>
                   </div>
                   <div className="columns is-variable is-8">
                       <div className="column is-12-tablet is-one-quarter-desktop">
                            <p className="upcoming">Upcoming Events</p>
                            <div className="event-wrapper">
                                <div className="calendar">
                                    <div className="num">8</div>
                                    <div className="month">DEC</div>
                                </div>
                                <p className="event-text">
                                Elit lectus nam platea eget amet.
                                </p>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#0D1C2E', height:'20px'}}/>
                            </div>
                            <div className="event-wrapper">
                                <div className="calendar">
                                    <div className="num">12</div>
                                    <div className="month">DEC</div>
                                </div>
                                <p className="event-text">
                                Sed eu aliquet vitae sit accumsan amet.
                                </p>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#0D1C2E', height:'20px'}}/>
                            </div>
                            <div className="event-wrapper">
                                <div className="calendar">
                                    <div className="num">29</div>
                                    <div className="month">DEC</div>
                                </div>
                                <p className="event-text">
                                In vitae molestie lacus feugiat.
                                </p>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#0D1C2E', height:'20px'}}/>
                            </div>
                            <button className="button is-info is-medium is-fullwidth" style={{marginTop:'20px'}}>View All Events</button>
                       </div>

                        <div className="column is-12-tablet setM">
                            <div className="columns ">
                                <div className="column">
                                    <div class="card">
                                        <div class="card-image">
                                            <figure className="image is-6by2">
                                                <Image src={activity1}/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="calendar">
                                                        <div className="num">27</div>
                                                        <div className="month">NOV</div>
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-4">Check In For New Members</p>
                                                </div>
                                            </div>

                                            <div className="content">
                                                Ut condimentum proin magna diam, cursus mattis neque non leo. Porta aliquam aliquet sit sed diam. Ac eu dictum aenean nibh ridiculus vitae at elementum id.
                                            </div>
                                            <button className="button"><FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: '#59a0d5', height:'20px', marginRight: '10px'}}/> READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-6by2">
                                                <Image src={activity2} alt="activity"/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="calendar">
                                                        <div className="num">4</div>
                                                        <div className="month">DEC</div>
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-4">BHUF Coaching Seminar</p>
                                                </div>
                                            </div>

                                            <div className="content">
                                            Sit feugiat massa feugiat ipsum. Sed malesuada ut molestie leo lacinia a egestas. Lectus ut sed scelerisque adipiscing suspendisse faucibus a pharetra, convallis. Imperdiet urna 
                                            </div>
                                            <button className="button"><FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: '#59a0d5', height:'20px', marginRight: '10px'}}/> READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="column">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-6by2">
                                                <Image src={activity3}/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="calendar">
                                                        <div className="num">8</div>
                                                        <div className="month">DEC</div>
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-4">Digital Learning at the Forefront of Business</p>
                                                </div>
                                            </div>

                                            <div className="content">
                                            Scelerisque arcu, turpis quis sed et adipiscing. In mattis tincidunt at orci ullamcorper. Dolor eu vestibulum vehicula at amet odio. Fermentum quam urna scelerisque tempor amet
                                            </div>
                                            <button className="button"><FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: '#59a0d5', height:'20px', marginRight: '10px'}}/> READ MORE</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
