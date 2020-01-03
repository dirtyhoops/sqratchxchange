import { GET_ITEMS } from '../actions/types';

const initialState = {
  selectedItem: null,
  items: [],
  loadingItems: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loadingItems: false
      };

    default:
      return state;
  }
}
