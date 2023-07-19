import Footer from './components/Footer'
import ToursDetail from './components/Tour/ToursDetail'
import Header from './layouts/Header'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Gastronomy from './pages/Gastronomy'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Turism from './pages/Turism'
import '/public/css/app.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/turismo' element={<Turism />} />
        <Route path='/turismo/:slug' element={<ToursDetail />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/gastronomia' element={<Gastronomy />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
