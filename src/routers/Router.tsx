import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';


interface Props {
    
}
interface State {
    
}

export default class Router extends Component<Props, State> {
    state = {}

    render() {
        return (
          <BrowserRouter>
            <Route exact path='/'></Route>
            <Route exact path="/login" component={LoginPage}/>
          </BrowserRouter>

        )
    }
}
