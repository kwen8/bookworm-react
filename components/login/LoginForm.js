import React from "react";
import { Button, Form, Input } from "antd";
class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loding: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.submit(values);
      }
    });
  };

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <Form>
        <FormItem {...formItemLayout} label="邮箱">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "请输入合法的邮箱!"
              },
              {
                required: true,
                message: "请输入邮箱!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator("password", {
            rules: [
              {
                min: 6,
                message: "最小长度为6"
              },
              {
                required: true,
                message: "请输入密码!"
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}
export default Form.create()(LoginForm);
