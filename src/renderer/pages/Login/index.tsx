import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Form, Input, Button, message } from 'antd';
import codes from './codes';

const Login = ({ isLogin, login, logout, location, form }) => {
  const {
    query: { redirect, type = 'login' },
  } = location;
  const {
    getFieldDecorator,
    validateFields,
    setFieldsValue,
    getFieldValue,
  } = form;

  const handleSubmit = e => {
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        const { secretKey } = values;
        if (codes.find(a => a === secretKey)) {
          message.success('激活成功，欢迎使用！');
          router.goBack();
          login();
        } else {
          message.error('激活失败，请重试！');
          setFieldsValue({ secretKey: '' });
        }
      }
    });
  };

  return (
    <div style={{ padding: 24 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          label="激活码"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('secretKey', {
            rules: [
              { required: true, message: '激活码不能为空' },
              { pattern: /^[a-z\d-]{36}$/i, message: '激活码格式不对' },
            ],
          })(<Input placeholder="请输入64位的激活码" />)}
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!getFieldValue('secretKey')}
          >
            激活
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(
  ({ user }) => ({
    isLogin: user.isLogin,
  }),
  dispatch => ({
    login() {
      dispatch({ type: 'user/login' });
    },
    logout() {
      dispatch({ type: 'user/logout' });
    },
  })
)(Form.create({ name: 'login' })(Login));
