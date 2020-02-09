import {
  GET_ITEMS,
  GET_RANDOM_ITEMS,
  GET_ITEM,
  ADD_SUCCESS,
  RESET_LOADINGITEMS
} from '../actions/types';

const initialState = {
  selectedItem: null,
  items: [],
  randomItems: [],
  loadingItems: true,
  addingSuccess: false
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
    case GET_RANDOM_ITEMS:
      return {
        ...state,
        randomItems: payload
      };
    case GET_ITEM:
      return {
        ...state,
        selectedItem: payload
      };
    case ADD_SUCCESS:
      return {
        ...state,
        addingSuccess: payload
      };
    case RESET_LOADINGITEMS:
      return {
        ...state,
        loadingItems: true
      };

    default:
      return state;
  }
}
