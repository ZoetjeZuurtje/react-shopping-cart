import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShoppingCartButton from '../components/ShoppingCartButton';
import logo from '/vite.svg';
import '../css/Header.css';


function Header({ showShoppingCart, shoppingCart, createRemoveThisFromCart, modifierFunction }) {

  const links = [
    {
      name: 'Home',
      to: '/home',
      key: crypto.randomUUID()
    },
    {
      name: 'Shop',
      to: '/',
      key: crypto.randomUUID()
    }
  ]

  return (
    <header>
      <Link to={'/home'}><img src={logo} alt={'Back to home'} /></Link>
      <Navbar linkArray={links} />
      {
      showShoppingCart ? <ShoppingCartButton shoppingCart={shoppingCart} removerFunction={createRemoveThisFromCart} modifierFunction={modifierFunction} /> : <div></div>
      }
    </header>
  )
}

export default Header;