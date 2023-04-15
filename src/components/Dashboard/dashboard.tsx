import React from 'react'
import Item from '../Item/item'
import './dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../Redux/albumSlice';

const Dashboard = () => {
  const dispatch = useDispatch()
  const getAlbums: Array<any> = useSelector((state: any) => state.album.albums)

  const onCartPressAdd = (e: string) => {
    dispatch(addToCart(e))
  }

  const onCartPressRemove = (e: string) => {
    dispatch(removeFromCart(e))
  }

  return (
    <div className='itemContainer'>
      {
        getAlbums.map((album, index) => {
          return (
            <Item album={album} 
              key={index} 
              onCartPressAdd={onCartPressAdd} 
              onCartPressRemove={onCartPressRemove}
            />
          )
        })
      }
    </div>
  )
}

export default Dashboard