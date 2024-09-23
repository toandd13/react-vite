import { Input, Button, Form } from "antd"

const RegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values)
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
                // rules={[
                //     {
                //         required: true,
                //         message: 'please input your full name'
                //     }
                // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                // rules={[
                //     {
                //         required: true,
                //         message: 'please input your full name'
                //     }
                // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                // rules={[
                //     {
                //         required: true,
                //         message: 'please input your full name'
                //     }
                // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                // rules={[
                //     {
                //         required: true,
                //         message: 'please input your full name'
                //     }
                // ]}
                >
                    <Input />
                </Form.Item>

                <div><Button onClick={() => form.submit()} type="primary">Register</Button></div>
            </div>
        </Form>
    )
}

export default RegisterPage