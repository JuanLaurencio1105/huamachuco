import Footer from './components/Footer'
import ToursDetail from './components/Tour/ToursDetail'
import Header from './layouts/Header'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Restaurant from './pages/Restaurant'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Turism from './pages/Turism'
import '/public/css/app.css'
import { Route, Routes } from 'react-router-dom'
import RestaurantDetail from './components/restaurant/RestaurantDetail'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/turismo' element={<Turism />} />
        <Route path='/turismo/:slug' element={<ToursDetail />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/restaurantes' element={<Restaurant />} />
        <Route path='/restaurantes/:slug' element={<RestaurantDetail />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
