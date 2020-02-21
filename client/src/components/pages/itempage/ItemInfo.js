import React from 'react';
import EmailForm from './EmailForm';

const ItemInfo = props => {
  const { selectedItem, sendEmail } = props;
  return (
    <div className='itempage__right'>
      <p className='itempage__text__name'>{selectedItem.name}</p>
      <p className='itempage__text__description'>
        Description: {selectedItem.description}
      </p>

      <EmailForm itemName={selectedItem.name} sendEmail={sendEmail} />
    </div>
  );
};

export default ItemInfo;
