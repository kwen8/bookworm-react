import React from "react";
import LoginForm from "../components/login/LoginForm";
import { Card } from "antd";
class LoginPage extends React.Component {
  submit = data => this.props.login(data);
  render() {
    return (
      <div>
        <Card title="登录" style={{ width: "400px" }}>
          <LoginForm submit={this.submit} />
        </Card>
      </div>
    );
  }
}

export default LoginPage;
