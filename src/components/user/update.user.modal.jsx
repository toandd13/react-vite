import { useEffect, useState } from "react"
import { Input, notification, Modal } from "antd"
import { createUserApi, updateUserApi } from "../../service/api.service"
const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const { isModelUpdate, setIsModelUpdate, dataUpdate, setDataUpdate, loadUser } = props

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate]
    )

    const handleSubmit = async () => {
        const res = await updateUserApi(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "update user",
                description: "Cập nhật người dùng thành công"
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "error update user",
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModelUpdate(false)
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);


    }
    return (
        <Modal
            title="UPDATE USER"
            open={isModelUpdate}
            onOk={() => handleSubmit()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="SAVE"
        >

            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input disabled
                        value={id}
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}
export default UpdateUserModal