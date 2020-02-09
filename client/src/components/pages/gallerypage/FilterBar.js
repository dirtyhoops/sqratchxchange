import React from 'react';

const FilterBar = props => {
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
          <li key={key} onClick={() => props.filterItems(filter.type)}>
            {filter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
