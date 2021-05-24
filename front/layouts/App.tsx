import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const SingUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path={'/'} to={'/login'}/>
      <Route path={'/login'} component={Login}/>
      <Route path={'/signup'} component={SingUp}/>
    </Switch>
  );
};

export default App;
