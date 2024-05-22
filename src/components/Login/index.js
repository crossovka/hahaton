import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

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
			const user = {
				username: '1',
				password: '2'
			};
	
			if (values.username === user.username && values.password === user.password) {
				navigate('/files');
				// alert('Вы вошли в систему');
			} else {
				setError('Неправильный логин или пароль');
			}
		} catch (error) {
			console.log(error);
			setError('Ошибка при входе в систему');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal
			title="Вход в систему"
			open={visible}
			onCancel={handleCancel}
			footer={[
				<Button
					key="login"
					type="primary"
					onClick={handleSubmit}
					loading={isLoading}
				>
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
