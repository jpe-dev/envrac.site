import React from 'react'
import { useEffect } from 'react';
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Booking = () => {
    useEffect(() => {
        document.body.classList.remove('background');
    }, []);
    return (
        <>
            <Menu />
            <div className='koalendar'>
                <iframe title="koalendar iframe" src="https://koalendar.com/e/advanced-session?embed=true " width="100%" height="660px" frameborder="0" id='koalendar'></iframe>
            </div>
            <Footer />
        </>

    )
}

export default Booking