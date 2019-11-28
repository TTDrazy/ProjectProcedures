import * as React from 'react';
import Login from '../components/login/Login';


export interface ILoginPageProps {
}

export default class LoginPage extends React.Component<ILoginPageProps> {
  public render() {
    return (
      <div>
        <Login></Login>
      </div>
    );
  }
}
