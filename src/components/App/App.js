import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import {Profile} from "../Profile/Profile";
import {Register} from "../Register/Register";


function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path='/signup'>
          <Register />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
