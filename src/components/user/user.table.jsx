import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';

const UserTable = (props) => {
    const { dataUser } = props

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <DeleteOutlined style={{ cursor: "pointer", color: "orange" }} />
                    <EditOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },

    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    )
}

export default UserTable