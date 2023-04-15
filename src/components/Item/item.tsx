import React from 'react'
import './item.css'
import { useSelector } from 'react-redux'
import { Capitalize } from '../../helperFunction';

interface Props {
  album: {
    userId: number,
    id: number,
    title: string
  },
  onCartPressAdd: (title: string) => void,
  onCartPressRemove: (title: string) => void
}

const Item = ({ album, onCartPressAdd, onCartPressRemove }: Props) => {
  const { id, title } = album
  const inCart: Array<any> = useSelector((state: any) => state.album.albumsInCart)


  return (
    <div className='soloAlbum' style={{borderColor:inCart.includes(title) ? 'lightgreen' : 'black'}}>
      <p>{id}</p>
      <p>{Capitalize(title)}</p>
      <div className='addorremove'>
        <button disabled={inCart.includes(title) ? true : false} onClick={()=>onCartPressAdd(title)} style={{fontSize:'30px'}}>✅</button>
        <button disabled={!inCart.includes(title) ? true : false} onClick={()=>onCartPressRemove(title)}  style={{fontSize:'30px'}}>❌</button>
      </div>
    </div>
  )
}

export default Item