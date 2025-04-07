import logo from '/vite.svg'
import { Link } from 'react-router-dom'
import '../css/App.css'
import '../css/Header.css'
import '../css/ShopItem.css'
import '../css/Shop.css'
import { useEffect, useState } from 'react'

import ShopItem from '../components/ShopItem'



function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products?limit=20')
        .then(response => response.json())
        .then(data => setProducts(data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  })

  return (
    <>
      <header>
        <img src={logo} alt="Shopping Enterprises" />
        <div>
          <label htmlFor="search-bar">
            <span>🔍</span>
            <input type="search" name="search-bar" id="" placeholder='Zoeken naar...' />
          </label>
        </div>
        <button>🛒</button>
      </header>
      <aside>
        <div className='filter'>
          <label htmlFor="price-range-min">
            <span>Minimum prijs</span>
            <input type="range" name="price-range-min" id="" />
          </label>
        </div>
        <div className='filter'>
          <label htmlFor="price-range-max">
            <span>Maximum prijs</span>
            <input type="range" name="price-range-max" id="" />
          </label>
        </div>
        <div className='filter'>
          <label htmlFor="category">
            <span>Categorie</span>
            <select name="category" id="">
              <option value="">Alle</option>
              <option value="electronics">Elektronica</option>
              <option value="fashion">Mode</option>
              <option value="other">Anders</option>
            </select>
          </label>
        </div>
      </aside>
      <main className='shop'>
        {
          products.map(product => (<ShopItem 
            key={product.id}
            productLink={product.link}
            productName={product.name}
            productPrice={product.price}
            productImage={product.image}
            />))
        }
      </main>
    </>
  )
}

export default App
