import React from 'react'
import './Header.css'
import Logo from './Assets/logo.svg'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='Header'>
            <img className='header_icon' src={Logo} alt='Wind BnB' />

            <div className='header_right'>
                <input type='text' placeholder='Location'/>
                <input type='text' placeholder='Add Guests'/>
                <SearchIcon style={{ color: '#EB5757' }}/>
            </div>

           
        </div>
    )
}

export default Header
