import logo from '/vite.svg'
import { Link } from 'react-router-dom'
import '../css/App.css'
import '../css/Header.css'
import '../css/ShopItem.css'
import '../css/Shop.css'

function App() {

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
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>
        <div className="shop-item">
          <a href="">
            <img src="https://placehold.co/150" alt="" />
          </a>
          <hr />
          <h2>Product naam</h2>
          <p className='price'>€ 99,99</p>
        </div>

      </main>
    </>
  )
}

export default App
