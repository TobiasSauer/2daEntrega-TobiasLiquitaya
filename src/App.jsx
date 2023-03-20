import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ProductsList from './components/productsList/index';
import ProductItem from './components/productItem';

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/Home' element={<h3>Welcome</h3>}/>
        <Route path='/Products' element={<ProductsList products={products}/>}/>
        <Route path='/Products/:id' element={<ProductItem />}/>
        <Route path='/Cart' element={<h3>carrito</h3>}/>
      </Routes>
    </div>
  )
}

export default App;