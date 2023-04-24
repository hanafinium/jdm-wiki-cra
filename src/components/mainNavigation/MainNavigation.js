import React from 'react';
import './mainnavigation.css'

function MainNavigation() {
    return(
        <nav className='main-navigation'>
            <p className='nav-title'><a href='/'>JDM Wiki</a></p>
            <p className='nav-description'>Collection of Japanese Domestic Market(JDM) cars specifications</p>
        </nav>
    )
}

export default MainNavigation;