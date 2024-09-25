import { Button, Col, Divider, Form, Input, message, notification, Row } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRightOutlined } from "@ant-design/icons";
import { loginAPI } from "../service/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext)

    const [loading, setLoading] = useState()
    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password)
        if (res.data) {
            message.success("Đăng nhập thành công")
            localStorage.setItem("access_token", res.data.access_token)
            setUser(res.data.user);
            navigate("/")
        } else {
            notification.error({
                message: "Error login",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false)

    }
    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={18} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Không được để trông email",
                                },
                                {
                                    type: "email",
                                    message: "Email không đúng định dạng",
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
                                    message: "Password không được để trống"
                                }
                            ]}
                        >
                            <Input.Password onKeyDown={(event) => {
                                if (event.key === 'Enter') form.submit()
                            }} />
                        </Form.Item>


                        <Form.Item>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <Button
                                    loading={loading}
                                    type="primary" onClick={() => form.submit()}
                                >Login</Button>
                                <Link to={"/"}>Go to homepage <ArrowRightOutlined /> </Link>
                            </div>
                        </Form.Item>


                        <Divider />
                        <p style={{ textAlign: "center", marginTop: "30px" }}>Chưa có tài khoản? <Link to={"/register"}>đăng ký tại đây</Link>  </p>
                    </Form>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage