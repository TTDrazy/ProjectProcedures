import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LoginSuccessPage from '../pages/LoginSuccessPage';
import HelloPage from '../pages/HelloPage';
import PersonListPage from '../pages/PersonListPage';


interface Props {
    
}
interface State {
    
}

export default class Router extends Component<Props, State> {
    state = {}

    render() {
        return (
          <BrowserRouter>
            <Route exact path='/' component = {HelloPage}></Route>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/login/success" component={LoginSuccessPage}/>
            <Route exact path="/person" component={PersonListPage}/>
          </BrowserRouter>

        )
    }
}
