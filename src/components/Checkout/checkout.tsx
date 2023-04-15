import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../Redux/albumSlice'
import { checkout } from '../../messages'
import './checkout.css'

const Checkout = () => {
  const albums = useSelector((state: any) => state.album.albumsInCart)
  const dispatch = useDispatch()

  const buy = () => {
    dispatch(clearCart())
    alert(checkout.Thanks)
  }

  return (
    <div className='container'>
    <div className='checkout' style={{ textAlign: 'center' }}>
      {albums.map((item: any, index: any) => {
        return <p className='border' key={index} style={{ backgroundColor: item }}>Album {index + 1} - {item}</p>
      })
      }
      <div>
        {
          albums.length > 0 ? <button className='btn' onClick={buy}>{checkout.Checkout} ✅</button> : <p>{checkout.Empty}</p>
        }
      </div>
    </div>
    </div>
  )
}

export default Checkout