import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import User from './pages/user/User'
import Products from './pages/products/Products'
import Layout from './componenets/layout/Layout'
import "./styles/global.scss"
import Product from './pages/product/Product'
import Profile from './pages/profile/Profile'
function App() {

  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path ="/"  element ={ <Layout/> }>
          <Route index  element ={ <Home/> }/>
          <Route path ="profile"  element ={ <Profile/> }/>

          <Route path ="users"  element ={ <Users/> }/>
          <Route path ="users/:id"  element ={ <User/> }/>
          <Route path ="products"  element ={ <Products/> }/>
          <Route path ="products/:id"  element ={ <Product/> }/>

        </Route>
      </Routes>
      </HashRouter>
  

    </div>
  )
}

export default App
