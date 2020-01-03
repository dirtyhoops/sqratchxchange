import { GET_ITEMS } from './types';

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
