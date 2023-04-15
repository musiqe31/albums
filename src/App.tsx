import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/dashboard'
import Checkout from './components/Checkout/checkout'
import Header from './components/Header/header'
import NotFound from './components/ErrorPage/errorPage'
import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllAlbums } from './Redux/albumSlice'
import { api } from './messages'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(api.url)
      const data = await response.json()
      dispatch(getAllAlbums(data))
    }
    getData()
  }, [])

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default App
