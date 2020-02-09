import React from 'react';
import { Link } from 'react-router-dom';

const ItemBar = props => {
  // @ Todo
  // 1. have an onClick that change the filter

  const { filterItems } = props;

  const filterss = [
    { name: 'shirts', type: 'shirt' },
    { name: 'jackets', type: 'jacket' },
    { name: 'jerseys', type: 'jersey' },
    { name: 'sweaters', type: 'sweater' },
    { name: 'accessories', type: 'accessory' },
    { name: 'shoes', type: 'shoes' },
    { name: 'bottoms', type: 'bottom' },
    { name: 'toys', type: 'toy' },
    { name: 'all products', type: 'all products' }
  ];

  const filters = [
    'shirt',
    'jacket',
    'jersey',
    'sweater',
    'accessories',
    'shoes',
    'bottom',
    'toys',
    'all products'
  ];
  return (
    <div className='filterbar container'>
      <ul className='filterbar__ul'>
        {filterss.map((filter, key) => (
          <Link to={`/gallery`} onClick={() => filterItems(filter.type)}>
            <li key={key}>{filter.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ItemBar;
