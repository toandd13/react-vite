import { Input, Button, Form, notification, Row, Col, Divider } from "antd"
import { registerUserApi } from "../service/api.service";
import { Link, useNavigate } from "react-router-dom";

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
            style={{ margin: "30px" }}
        >

            <h3 style={{ textAlign: "center" }}>Đăng kí tại đây</h3>
            <Row justify={"center"}>
                <Col xs={24} md={6}>
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
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={6}>
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
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={6}>
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
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={6}>
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
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <div>
                        <Button onClick={() => form.submit()} type="primary">Register</Button>
                    </div>

                    <Divider />
                    <div>
                        <p style={{ marginTop: "30px" }}>Đã có tài khoản? <Link to={"/register"}>đăng nhập tại đây</Link>  </p>
                    </div>

                </Col>
            </Row>
        </Form>
    )
}

export default RegisterPage