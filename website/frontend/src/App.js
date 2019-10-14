import React, {Fragment} from 'react';
import {BrowserRouter, Route, Redirect,  Switch} from 'react-router-dom';
import { Users } from './pages/users';
import { Groups } from './pages/groups';
import { Navbar } from './components/Navbar';
import {AddGroup} from './pages/addGroup'
import {AddUser} from './pages/addUser'

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Navbar/>
      <div className="Container pt-4">
        <Switch>
          <Route path={'/users'} exact component={Users} />
          <Route path={'/users/add'} exact component={AddUser} />
          <Route path={'/groups'} exact component={Groups} />
          <Route path={'/groups/add'} exact component={AddGroup} />
        </Switch>
        <Redirect to="/users/"/>
      </div>
    </BrowserRouter>
  </Fragment>
)

export default App;
