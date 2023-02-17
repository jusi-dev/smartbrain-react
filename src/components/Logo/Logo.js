import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='TiltObj br2 shadow-2'>
                <div className='pa3' style={{ height: '150px', backgroundColor: 'lightblue' }}>
                    <img style={{ paddingTop: '10px'}} alt='brain-icon' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;