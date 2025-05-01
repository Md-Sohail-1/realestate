import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

import Header from './Components/Header'

// Home Page 
import Home from './Pages/Home'

// Buy  Page 
import BuyPage from './Pages/BuyPage'

// Sell Page 
import SellPage from './Pages/SellPage'

// View Page 
import PropertyViewPage from './Pages/PropertyViewPage'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-home" element={<BuyPage />} />
        <Route path="/sell-home" element={<SellPage />} />
        <Route path="/property/view/:id" element={<PropertyViewPage />} />
      </Routes>
    </>
  )
}

export default App
