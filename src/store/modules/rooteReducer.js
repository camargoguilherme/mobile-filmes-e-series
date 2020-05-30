import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import serie from './serie/reducer';
import filme from './filme/reducer';

export default combineReducers({
  auth,
  user,
  serie,
  filme,
});
