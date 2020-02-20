import React from 'react';
import { Link } from 'react-router-dom';

const MoreProducts = props => {
  const { randomItems, loadItems } = props;

  return (
    <div className='itempage__moreproducts'>
      <h3 className='heading-secondary'>More Products</h3>
      <div className='itempage__moreproducts__container'>
        {randomItems.length > 0
          ? randomItems.map((randomItem, index) => (
              <Link key={index} to={`/gallery/${randomItem._id}`}>
                <div
                  className='itempage__moreproducts__box'
                  onClick={() => loadItems(`${randomItem._id}`)}
                >
                  <img src={randomItem.image} alt='productsimg' />
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default MoreProducts;
