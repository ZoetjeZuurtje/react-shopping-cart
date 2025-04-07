import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ShopItem({productLink, productImage, productName, productPrice}) {
  
  const PLACEHOLDER_PICTURE = 'https://placehold.co/150';
  productImage = productImage === undefined ? PLACEHOLDER_PICTURE : productImage;

  return  <div className="shop-item">
            <Link to={productLink} style={{backgroundImage: `url(${productImage})` }} className={'product-image'} />
            <hr />
            <h2>{productName}</h2>
            <p className='price'>€ {productPrice}</p>
          </div>;
}

ShopItem.propTypes = {
  productLink: PropTypes.string,
  productImage: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired
}

export default ShopItem;