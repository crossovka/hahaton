import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';

function Login({ visible, onClose }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = () => {
    setIsLoading(true);
    form.submit();
  };

  const handleFinish = async (values) => {
    try {
      const response = await fetch('../../fakeDB.json');
      const users = await response.json();

      const user = users.find((user) => user.username === values.username);

      if (user && user.password === values.password) {
        navigate('/dashboard');
      } else {
        setError('Неправильный логин или пароль');
      }
    } catch (error) {
      setError(error, 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Вход в систему"
      visible={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Отмена
        </Button>,
        <Button key="login" type="primary" onClick={handleSubmit} loading={isLoading}>
          Войти
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          name="username"
          label="Имя пользователя"
          rules={[{ required: true, message: 'Введите имя пользователя' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password />
        </Form.Item>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Form>
    </Modal>
  );
}

export default Login;