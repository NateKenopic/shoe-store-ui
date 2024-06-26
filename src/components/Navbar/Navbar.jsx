//import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import Canada_Flag from '../../assets/Canada_Flag.svg';

function Navbar() {

  return (
    <>
        <div id='top-navbar'>
            <div id='top-nav-left'>
                <img src={Canada_Flag} id='nav-canada-flag'></img>
            </div>

            <div id='top-nav-right'>
                <Link id='nav-stores-item' to="/stores">Find a Store</Link>
                |
                <Link id='nav-stores-item' to="/help">Help</Link>
                |
                <Link id='nav-login-item' to="/login">Login</Link>
                <Link id='nav-logout-item' to="/">Logout</Link>
            </div>
        </div>
        
        <div id="navbar">
            <div id='nav-left'>
                <Link id='nav-home-item' to="/">Home</Link>
            </div>
            <div id='nav-center'>
                <Link className='middle-menu-options' to="/mens" title='Mens'>Mens</Link>
                <Link className='middle-menu-options' to="/mens" title='Womens'>Womens</Link>
                <Link className='middle-menu-options' to="/mens" title='Kids'>Kids</Link>
                <Link className='middle-menu-options' to="/mens" title='Sale'>Sale</Link>
            </div>
            <div id='nav-right'>
                <Link id='nav-cart-item' to="/shoppingCart"><Icon path={mdiCartOutline} size={1.5} /></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar
