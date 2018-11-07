import { combineReducers } from 'redux';
import reset from './ResetPasswordReducer';
import resetting from './ResettingPasswordReducer';
import signUp from './signup.reducer';

const rootReducer = combineReducers({
  // insert reducers here
  reset,
  resetting,
  signUp,
});

export default rootReducer;
