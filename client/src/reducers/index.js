import { combineReducers } from 'redux';

import gallery from './gallery';
import alert from './alert';

export default combineReducers({
  gallery,
  alert
});
