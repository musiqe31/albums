import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'
import { header } from '../../messages'

const Header = () => {
    const albumTotal = useSelector((state: any) => state.album.albumsInCart)

    return (
        <div className='navbar'>
            {header.Store}
            <Link to="/">{header.Dashboard}</Link>
            <Link to="/checkout">{header.Checkout}</Link>
            {header.albumTotal} {albumTotal.length}
        </div>
    )
}

export default Header