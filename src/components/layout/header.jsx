import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, message } from 'antd'
import { AliwangwangOutlined, DesktopOutlined, HomeOutlined, LoginOutlined, SettingOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import { Children, lazy, useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../service/api.service';
const Header = () => {
    const [current, setCurrent] = useState('');
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            //clear data
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Logout thanh cong")

            //redirect to home
            // navigate("/");
        }

    }
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupDeleteOutlined />,

        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <DesktopOutlined />,

        },
        // {
        //     label: "cài đặt",
        //     key: "Setting",
        //     icon: <SettingOutlined />,
        //     children: [
        //         {
        //             label: <Link to={"/login"}>Đăng Nhập</Link>,
        //             key: "login",
        //         },
        //         {
        //             label: "Đăng xuất",
        //             key: "logout"
        //         }
        //     ]
        // }

        ...(!user.id ? [{
            label: <Link to={"/login"}>Dang nhap</Link>,
            key: "login",
            icon: <LoginOutlined />
        }] : []),


        ...(user.id ? [{
            label: `Well come ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Dang Xuat</span>,
                    key: "logout"

                },
            ],
        }] : []),


    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal" items={items} />

    )
}
export default Header