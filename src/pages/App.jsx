import logo from '/vite.svg'
import '../css/App.css'
import '../css/Header.css'
import '../css/ShopItem.css'
import '../css/Shop.css'
import { useEffect, useState } from 'react'

import ShopItem from '../components/ShopItem'
import SearchBar from '../components/SearchBar'
import ShoppingCartButton from '../components/ShoppingCartButton'
import { Link } from 'react-router-dom'


function App() {
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  const createRemoveThisFromCart = product => () => {
    const indexOfProduct = shoppingCart.indexOf(product)
    const newProducts = [...shoppingCart.slice(0, indexOfProduct), ...shoppingCart.slice(indexOfProduct + 1)];
    setShoppingCart(newProducts);
  }
  const createModifyThisFromCart = product => property => value =>{
    const indexOfProduct = shoppingCart.indexOf(product)
    const newProduct = {...product, [property]: value}
    const newProductArray = [...shoppingCart.slice(0, indexOfProduct), newProduct, ...shoppingCart.slice(indexOfProduct + 1)];
    setShoppingCart(newProductArray);
  }
  const addToCart = product => () => {
    const index = shoppingCart.findIndex(item => item.key === product.id)
    if (index != -1) {
      const item = shoppingCart.at(index);
      let copy = [...shoppingCart.slice(0, index), {...item, quantity: +item.quantity + 1}, ...shoppingCart.slice(index + 1)];
      setShoppingCart(copy);
      return
    }
    const shoppingCartItem = {
      name: product.title,
      price: product.price,
      image: product.image,
      key: product.id,
      quantity: 1
    }
    const newShoppingCart = [...shoppingCart, shoppingCartItem]
    setShoppingCart(newShoppingCart);
  }


  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products?limit=20')
      .then(response => response.json())
      .then(data => setProducts(data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [])

  return (
    <>
      <header>
        <Link to={'/'}><img src={logo} alt={'Back to home'} /></Link>
        <SearchBar />
        <ShoppingCartButton shoppingCart={shoppingCart} removerFunction={createRemoveThisFromCart} modifierFunction={createModifyThisFromCart} />
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
            productName={product.title}
            productPrice={product.price}
            productImage={product.image}
            addToCart={addToCart(product)}
            />))
        }
      </main>
    </>
  )
}

export default App
