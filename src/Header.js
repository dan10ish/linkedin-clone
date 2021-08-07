import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <h2>This is the header</h2>

            <div className="header__left">
                <img src="" alt="" />

                <div className="header__search">
                    {/* SearchIcon */}
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
