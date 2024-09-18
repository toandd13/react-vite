import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { fetchAllUserAPI } from '../service/api.service';
import { useEffect, useState } from 'react';
const UserPage = () => {

    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUser={dataUser} />
        </div>
    )
}
export default UserPage