import React, { useState } from 'react';

const FilterBar = props => {
  const [selectedFilter, setSelectedFilter] = useState('all products');

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

  const onClickHandler = filter => {
    props.filterItems(filter);
    setSelectedFilter(filter);
  };

  return (
    <div className='filterbar container'>
      <ul className='filterbar__ul'>
        {filters.map((filter, key) => (
          <li
            key={key}
            className={selectedFilter === filter.type ? 'filterSelected' : ''}
            onClick={() => onClickHandler(filter.type)}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
