import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ShopItem({productLink, productImage, productName, productPrice, addToCart}) {
  
  const PLACEHOLDER_PICTURE = 'https://placehold.co/150';
  productImage = productImage === undefined ? PLACEHOLDER_PICTURE : productImage;

  return  <div className="shop-item">
            <Link to={productLink} style={{backgroundImage: `url(${productImage})` }} className={'product-image'} />
            <hr />
            <h2>{productName}</h2>
            <div>
              <p className='price'>€ {productPrice}</p>
              <button onClick={addToCart}></button>
            </div>
          </div>;
}

ShopItem.propTypes = {
  productLink: PropTypes.string,
  productImage: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ShopItem;