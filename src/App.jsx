
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/HomePage/HomePage'
import Shop from '../src/Pages/ShopPage/ShopPage'
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart'
import Layout from './Pages/Layout/Layout';
import ProductPage from './Pages/ProductPage/ProductPage'
import { CartProvider } from './Components/CartContext/CartContext';

function App() {


  return (
   <BrowserRouter>
   <CartProvider>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} ></Route>
    <Route path='/home' element={<Home/>} ></Route>
    <Route path='/shop' element={<Shop/>} ></Route>
    <Route path='/contact' element={<Contact/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
    <Route path='/product/:id' element={<ProductPage/>}></Route>
    </Route>
   </Routes>
   </CartProvider>
   </BrowserRouter>
  )
}

export default App
