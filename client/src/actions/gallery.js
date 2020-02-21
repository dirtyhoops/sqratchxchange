import {
  GET_ITEMS,
  GET_RANDOM_ITEMS,
  GET_ITEM,
  ADD_SUCCESS,
  RESET_LOADINGITEMS,
  RESET_SELECTEDITEM
} from './types';

import { setAlert } from './alert';

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

// get 6 random items to display for "more items"
export const getRandomItems = () => async dispatch => {
  try {
    const res = await axios.get('/api/gallery/random');

    dispatch({
      type: GET_RANDOM_ITEMS,
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
    console.log('error getting items, make a ITEM ERROR DISPATCH LATER');
  }
};

export const addItem = ({ formData }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/gallery', formData, config);

    dispatch(setAlert(res.data.msg, 'success'));

    // Set the addingSuccess to true so it refreshes the page and it clears the form
    setTimeout(() => dispatch({ type: ADD_SUCCESS, payload: true }), 2000);

    // Resets the addingSuccess to false
    setTimeout(() => dispatch({ type: ADD_SUCCESS, payload: false }), 10);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Just to reset loadingItems in the redux
export const resetLoadingItems = () => async dispatch => {
  dispatch({
    type: RESET_LOADINGITEMS
  });
};

// Just to reset itemSelected in the redux
export const resetSelectedItem = () => async dispatch => {
  dispatch({
    type: RESET_SELECTEDITEM
  });
};

// This is for sending the email
export const sendEmail = ({ emailFormData }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      '/api/gallery/send-email',
      emailFormData,
      config
    );
  } catch (err) {
    // Change this to a better error checking later once it's working
    console.log('cant sent email');
  }
};
