import { GET_ITEMS, GET_ITEM } from './types';

import axios from 'axios';

export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('/api/gallery');

    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
    // Change this to dispatch something
    console.log('error getting items');
  }
};

// same as getItems but it filters the items depending on the passed type
export const filterItems = type => async dispatch => {
  try {
    const res = await axios.get('/api/gallery');

    dispatch({
      type: GET_ITEMS,
      payload:
        type === 'all products'
          ? res.data
          : res.data.filter(item => item.type === type)
    });
  } catch (err) {
    // Change this to dispatch something
    console.log('error getting items');
  }
};

export const getItem = id => async dispatch => {
  try {
    const res = await axios.get(`/api/gallery/${id}`);

    dispatch({
      type: GET_ITEM,
      payload: res.data
    });
  } catch (err) {
    console.log('error getting shoes, make a ITEM ERROR DISPATCH LATER');
  }
};

export const addItem = ({
  itemname,
  description,
  imagelink,
  type
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    itemname,
    description,
    imagelink,
    type
  });

  try {
    const res = await axios.post('/api/gallery', body, config);
    // dispatch(setalert('Addition of the item is successful', 'success'))
    console.log('succesful adding new item');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      console.log('erorrrrrrrrr');
    }
  }
};
