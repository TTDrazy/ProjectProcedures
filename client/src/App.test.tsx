import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router />, div);
  ReactDOM.unmountComponentAtNode(div);
});
