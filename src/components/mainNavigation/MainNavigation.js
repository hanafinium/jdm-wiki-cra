import React from 'react';
import './mainnavigation.css'

function MainNavigation() {
    return(
        <nav className='main-navigation'>
            <p className='nav-title'><a href='/'>JDM Wiki</a></p>
            <p className='nav-description'>Repository on specification of Japanese Domestic Market (JDM) cars.</p>
        </nav>
    )
}

export default MainNavigation;