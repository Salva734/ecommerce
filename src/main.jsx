import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './components/Shared/ScrollToTop.jsx'
import {FiltersContextProvider} from './contexts/FiltersContext.jsx'
import {CartContextProvider} from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartContextProvider>
    <FiltersContextProvider>
    <ScrollToTop/>
      <App />
    </FiltersContextProvider>
    </CartContextProvider>
    </BrowserRouter>
  </StrictMode>
)
