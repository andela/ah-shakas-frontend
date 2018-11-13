import React from 'react';
import { withAlert } from 'react-alert';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/Auth/LoginContainer';
import SignUpContainer from './containers/Auth/SignUpContainer';
import HomePageContainer from './containers/HomePageContainer';
import CreateArticleComponent from './containers/Articles/CreateArticleContainer';
import ReadUpdateArticleContainer from './containers/Articles/ReadUpdateArticleContainer';
import ForgotPasswordContainer from './containers/Auth/ForgotPasswordContainer';
import ResetPasswordContainer from './containers/Auth/ResetPasswordContainer';
import './App.scss';
import VerificationContainer from './containers/Auth/VerificationContainer';
import SignUpSuccess from './components/Messages/SignUpSuccess';

require('dotenv').config();

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={HomePageContainer} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/forgot_password" exact component={ForgotPasswordContainer} />
      <Route path="/reset_password/:token" exact component={withAlert(ResetPasswordContainer)} />
      <Route path="/article" exact component={withAlert(CreateArticleComponent)} />
      <Route path="/article/:slug" exact component={withAlert(ReadUpdateArticleContainer)} />
      <Route path="/signup/success" exact component={SignUpSuccess} />
      <Route path="/verify/:token" exact component={VerificationContainer} />
    </Switch>
  </div>
);

export default App;
