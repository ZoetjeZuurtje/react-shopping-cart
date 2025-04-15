import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShoppingCartButton from '../components/ShoppingCartButton';
import logo from '/vite.svg';
import '../css/Header.css';


function Header({ showShoppingCart, shoppingCart, createRemoveThisFromCart, modifierFunction }) {

  return (
    <header>
      <Link to={'/'}><img src={logo} alt={'Back to home'} /></Link>
      <Navbar></Navbar>
      {
      showShoppingCart ? <ShoppingCartButton shoppingCart={shoppingCart} removerFunction={createRemoveThisFromCart} modifierFunction={modifierFunction} /> : <div></div>
      }
    </header>
  )
}

export default Header;