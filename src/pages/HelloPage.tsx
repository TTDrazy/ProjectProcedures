import * as React from 'react';

export interface IHelloPageProps {
}

export default class HelloPage extends React.Component<IHelloPageProps> {
  public render() {
    return (
      <div>
        <h2>欢迎学习 项目流程~</h2>
        <h4>你的：</h4>
        <h4>仙女姐姐</h4>
      </div>
    );
  }
}
