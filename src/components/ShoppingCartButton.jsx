import { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ShoppingCartButton.css';
import { Link } from 'react-router-dom';


function ShoppingCartButton({ shoppingCart, removerFunction, modifierFunction }) {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!isExpanded);
  
  return (
    <div id={'shopping-cart-button'}>
      <button onClick={toggleExpanded}>🛒</button>
      <div className={isExpanded ? 'hidden' : ''} id={'shopping-cart-popup'}>
        {
          shoppingCart.map(item => {
            const removeFromCart = removerFunction(item);
            const updateQuantity = (event) => {
              if (event.target.value < 1) return // do nothing
              
              return modifierFunction(item)('quantity')(event.target.value)
            };
            return (
              <div key={item.key} className='shopping-cart-item'>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <div>
                  <input type="number" value={item['quantity']} onChange={updateQuantity} />
                  <button className='delete-button' onClick={removeFromCart}>Delete</button>
                </div>
              </div>
            )
          })
        }
        <Link className={'checkout-link'} to={'checkout'}>-&gt; Go to checkout</Link>
      </div>
    </div>
  )
}

ShoppingCartButton.propTypes = {
  shoppingCart: PropTypes.array,
  removerFunction: PropTypes.func
}

export default ShoppingCartButton;