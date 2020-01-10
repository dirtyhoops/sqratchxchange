import React from 'react';

const FilterBar = props => {
  // @ Todo
  // 1. have a const array with the LI values and then just map it with the li

  const filters = [
    'shirt',
    'jackets',
    'jersey',
    'sweaters',
    'dress shirts',
    'acessories',
    'home decoration',
    'bottoms',
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
        {/* <li>T-Shirts</li>
        <li>Jackets</li>
        <li onClick={() => props.filterItems('jersey')}>Jerseys</li>
        <li>Sweaters</li>
        <li>Dress Shirts</li>
        <li>Accessories</li>
        <li>Home Decor</li>
        <li>Bottoms</li>
        <li>All Products</li> */}
      </ul>
    </div>
  );
};

export default FilterBar;
