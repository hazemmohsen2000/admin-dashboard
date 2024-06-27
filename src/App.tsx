import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import Layout from './componenets/layout/Layout'
import "./styles/global.scss"
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/"  element ={ <Layout/> }>
          <Route index  element ={ <Home/> }/>
          <Route path ="users"  element ={ <Users/> }/>
          <Route path ="products"  element ={ <Products/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
  

    </div>
  )
}

export default App
