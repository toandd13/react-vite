import { Input, Button, Form, notification } from "antd"
import { registerUserApi } from "../service/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {
        const res = await registerUserApi(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Đăng Kí người dùng thành công"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "Register user error",
                description: "Đăng ký người dùng thất bại"
            })
        }
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        >


            <div style={{
                margin: "50px",

            }}>

                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'please input your full name'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'please input your email'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'please input your password'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'please input your phone number'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <div><Button onClick={() => form.submit()} type="primary">Register</Button></div>
            </div>
        </Form>
    )
}

export default RegisterPage