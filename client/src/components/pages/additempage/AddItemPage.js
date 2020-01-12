import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../actions/gallery';

const AddItemPage = ({ addItem }) => {
  const [formData, setFormData] = useState({
    itemname: '',
    description: '',
    imagelink: '',
    type: '',
    admincode: ''
  });

  const { itemname, description, imagelink, type, admincode } = formData;

  // it changes the value of the target every keystroke
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (admincode !== 'vape3onesx') {
      // setAlert('Admin Code is incorrect', 'danger');
      console.log('gotta have the right admin code to add item');
    } else {
      addItem({ itemname, description, imagelink, type });
    }
  };

  return (
    <div className='additempage container'>
      <div className='form__container'>
        <p className='form__header'>Add item</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form__group'>
            <label htmlFor='itemname'>Item Name</label>
            <input
              className='form__control'
              type='text'
              name='itemname'
              value={itemname}
              onChange={e => onChange(e)}
              required
            ></input>
          </div>
          <div className='form__group'>
            <label htmlFor='description'>Description</label>
            <input
              className='form__control'
              type='text'
              name='description'
              value={description}
              onChange={e => onChange(e)}
              required
            ></input>
          </div>
          <div className='form__group'>
            <label htmlFor='imagelink'>Image Link</label>
            <input
              className='form__control'
              type='text'
              name='imagelink'
              value={imagelink}
              onChange={e => onChange(e)}
              required
            ></input>
          </div>
          <div className='form__group'>
            <label htmlFor='type'>Item Type</label>
            <select
              className='form__control'
              name='type'
              value={type}
              onChange={e => onChange(e)}
              required
            >
              <option value='' selected>
                Select the item type
              </option>
              <option value='shirt'>Shirt</option>
              <option value='jacket'>Jacket</option>
              <option value='jersey'>Jersey</option>
              <option value='sweater'>Sweater</option>
              <option value='accessory'>Accessory</option>
              <option value='shoes'>Shoes</option>
              <option value='bottom'>Bottom</option>
              <option value='toy'>Toy</option>
            </select>
          </div>
          <div className='form__group'>
            <label htmlFor='admincode'>Admin Code</label>
            <input
              className='form__control'
              type='text'
              name='admincode'
              value={admincode}
              onChange={e => onChange(e)}
              required
            ></input>
          </div>
          <div className='form__button'>
            <input
              type='submit'
              className='btn btn-dark btn-block'
              value='Add'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addItem })(AddItemPage);
