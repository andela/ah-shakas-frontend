import { combineReducers } from 'redux';
import reset from './resetPassword.reducer';
import resetting from './resettingPassword.reducer';
import article from './articles.reducer';
import signUp from './signup.reducer';
import loginReducer from './login.reducer';
import SocialAuthReducer from './socialauth.reducer';
import ratingReducer from './rating.reducer';
import verifyReducer from './verification.reducer';
import profileReducer from './profile.reducer';
import updateProfileReducer from './updateProfile.reducer';
import userArticlesReducer from './userArticles.reducer';
import favouriteArticlesReducer from './favouriteArticles.reducer';

const rootReducer = combineReducers({
  reset,
  resetting,
  article,
  signUp,
  loginReducer,
  social: SocialAuthReducer,
  ratingReducer,
  verifyReducer,
  profileReducer,
  updateProfileReducer,
  userArticlesReducer,
  favouriteArticlesReducer,
});

export default rootReducer;
