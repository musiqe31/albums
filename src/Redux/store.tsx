import { configureStore } from '@reduxjs/toolkit'
import albumReducer from './albumSlice'

const store = configureStore({
  reducer: {
    album: albumReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store