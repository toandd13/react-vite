import { useState } from "react"
import { Input, notification, Modal } from "antd"
import { createUserApi } from "../../service/api.service"
const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(true)
    const handleSubmit = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo mới user thành công"
            })
            resetAndCloseModal()
            // await loadUser()
        } else {
            notification.error({
                message: "error create user",
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");


    }

    return (
        <Modal
            title="UPDATE USER"
            open={isModalOpen}
            onOk={() => handleSubmit()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="SAVE"
        >

            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}
export default UpdateUserModal