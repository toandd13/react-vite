import { Button, Input } from "antd"
import { useState } from "react"

const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleClick = () => {
        console.log("check", { fullName, email, password, phoneNumber })
    }
    return (
        <div className="user-form" style={{ margin: "20px" }}>
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
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>
                <div>
                    <Button
                        onClick={handleClick}
                        type="primary">Create User</Button>
                </div>
            </div>
        </div>

    )
}
export default UserForm