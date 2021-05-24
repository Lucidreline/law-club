import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/pages/home-page/home-page.component';
import BoardMembersPage from './components/pages/board-members-page/board-members-page.component';
import EventsPage from './components/pages/events-page/events-page.component';
import ContactUsPage from './components/pages/contact-us-page/contact-us-page.component';
import Footer from './components/sections/footer/footer.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={HomePage} />
        <Route path='/members' component={BoardMembersPage} />
        <Route path='/events' component={EventsPage} />
        <Route exact path='/contact' component={ContactUsPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
