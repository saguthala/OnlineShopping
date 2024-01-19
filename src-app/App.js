import React from 'react'
import Nanbar from './Components/Nanbar/Nanbar'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSingnup from './Pages/LoginSingnup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Login from './Pages/Login'

const App = () => {
  return (
    <div> 
      <BrowserRouter>
      <Nanbar />
      <Routes>
         <Route path='/' element={<Shop/>} />
         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
         <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
         <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSingnup/>}/>
         <Route path='/logins' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App