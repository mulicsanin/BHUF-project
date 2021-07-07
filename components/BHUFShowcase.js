import React, { Component } from 'react';
import Image from 'next/image';
import show1 from '../public/images/showcase/showcase1.png'
import show2 from '../public/images/showcase/showcase2.png'
import show3 from '../public/images/showcase/showcase3.png'

export default class BHUFShowcase extends Component {
    render() {
        return (
            <section className="section" id="BHUFShowcase">
                <div className="container">
                    <div className="showcase">
                        <div className="left">
                            <div className="part">
                                <Image src={show1} alt="show1" height={300} width={521}/>
                                <div className="showcase-text up-text-bg">
                                    <p className="title">Pellentesque massa, convallis scelerisque nisl. Enim dignissim.</p>
                                    <p className="subtitle">Fringilla amet adipiscing justo, nibh. Ipsum lectus diam diam ac aenean id. </p>
                                </div>
                            </div>
                            <div className="part">
                                <div className="showcase-text down-text-bg">
                                    <p className="title">Enim congue varius curabitur pretium erat metus vel turpis.</p>
                                    <p className="subtitle">Elit malesuada eu placerat consectetur turpis gravida. Faucibus.</p>
                                </div>
                                <Image src={show2} alt="show2" height={300} width={521}/>
                            </div>
                        </div>
                        <div className="right">
                                <Image src={show3} alt="show3" height={445} width={546}/>
                                <div className="showcase-text-right right-text-bg">
                                    <p className="title">Enim nisi, lectus integer sed morbi aliquam. </p>
                                    <p className="subtitle">Vulputate justo id enim congue scelerisque libero mattis aliquam.  </p>
                                </div>
                        </div>
                    </div>
                    <div className="numbers">
                        <div className="sec">
                            <p className="num">2.457</p>
                            <p className="desc">Members</p>
                        </div>
                        <div className="sec">
                            <p className="num">57</p>
                            <p className="desc">Yearly Events</p>
                        </div>
                        <div className="sec">
                            <p className="num">49</p>
                            <p className="desc">Communities</p>
                        </div>
                        <div className="sec">
                            <p className="num">23</p>
                            <p className="desc">Average age</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
