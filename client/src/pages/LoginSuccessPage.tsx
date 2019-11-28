import * as React from 'react';

export interface ILoginSuccessPageProps {
}

export default class LoginSuccessPage extends React.Component<ILoginSuccessPageProps> {
  public render() {
    return (
      <div>
        <h2>恭喜您登录成功！</h2>
      </div>
    );
  }
}
