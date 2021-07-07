import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
class Hero extends React.Component
{
    render()
    {
       return (
                <section id="Hero">
                    <Navbar/>
                    <Header/>
                </section>
       ) 
    }    
}
export default Hero;