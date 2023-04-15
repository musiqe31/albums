import { createSlice } from '@reduxjs/toolkit'

export const albumSlice = createSlice({
  name: 'counter',
  initialState: {
    currentItem: '',
    albums: Array<string>(),
    albumsInCart: Array<string>()
  },
  reducers: {
    getAllAlbums: (state, action) => {
      state.albums = action.payload
    },
    addToCart: (state, action) => {
      state.albumsInCart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.albumsInCart = state.albumsInCart.filter((item: string) => item !== action.payload)
    },
    clearCart: (state) => {
      state.albumsInCart = Array<string>()
    }
  },
})

// Action creators are generated for each case reducer function
export const { getAllAlbums, clearCart, addToCart, removeFromCart } = albumSlice.actions

export default albumSlice.reducer