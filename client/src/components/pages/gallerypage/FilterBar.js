import React from 'react';

const FilterBar = props => {
  // @ Todo
  // 1. change the filters make it plural with S. maybe make the type plural when adding items

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
        {filters.map((filter, key) => (
          <li key={key} onClick={() => props.filterItems(filter)}>
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
