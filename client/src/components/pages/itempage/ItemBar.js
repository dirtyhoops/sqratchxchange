import React from 'react';
import { Link } from 'react-router-dom';

const ItemBar = props => {
  // @ Todo
  // 1. have an onClick that change the filter

  const { filterItems } = props;

  const filters = [
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

  return (
    <div className='filterbar container'>
      <ul className='filterbar__ul'>
        {filters.map((filter, index) => (
          <Link
            key={index}
            to={`/gallery`}
            onClick={() => filterItems(filter.type)}
          >
            <li>{filter.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ItemBar;
