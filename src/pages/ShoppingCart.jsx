import { Link } from 'react-router-dom';

function ShoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>This is the shopping cart page.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default ShoppingCart;