import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import logo from '/vite.svg';
import '../css/Header.css';


function Header({ showShoppingCart, shoppingCart, createRemoveThisFromCart, modifierFunction }) {

  return (
    <header>
      <Link to={'/'}><img src={logo} alt={'Back to home'} /></Link>
      {
      showShoppingCart ? (
      <>
        <SearchBar />
        <ShoppingCartButton shoppingCart={shoppingCart} removerFunction={createRemoveThisFromCart} modifierFunction={modifierFunction} />
      </>
      ) : (
        <></>
      )
      }
    </header>
  )
}

export default Header;