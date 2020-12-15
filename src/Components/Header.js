import React from 'react'
import './Header.css'
import Logo from './Assets/logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core'

function Header() {
    return (
        <div className='Header'>
            <img className='header_icon' src={Logo} alt='Wind BnB' />

            <div className='header_right'>
                <input type='text' placeholder='Location'/>
                <input min={0} type='number' placeholder='Add Guests'/>
                <Button><SearchIcon style={{ color: '#EB5757' }}/></Button>
            </div>

           
        </div>
    )
}

export default Header
