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
