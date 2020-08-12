import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/pages/home-page/home-page.component';
import BoardMembersPage from './components/pages/board-members-page/board-members-page.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/members' component={BoardMembersPage} />
      </Switch>
    </div>
  );
}

export default App;
