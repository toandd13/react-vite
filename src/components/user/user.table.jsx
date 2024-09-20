import { notification, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DetailUserModal from './detail.user.modal';
import { deleteUserAPI } from '../../service/api.service';

const UserTable = (props) => {
    const { dataUser, loadUser } = props;
    const [isModelUpdate, setIsModelUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDateDetail] = useState(null)
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'
                        onClick={() => {
                            setDateDetail(record);
                            setIsDetailOpen(true);
                        }}
                    >{record._id}</a>
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
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModelUpdate(true);
                            }}
                            style={{ cursor: "pointer", color: "red" }}
                        />
                        <Popconfirm
                            title="Xoa Nguoi Dung"
                            description="Ban chac chan muon xoa nguoi dung nay?"
                            onConfirm={() => handleDeleteUser(record._id)}
                            okText="yes"
                            cancelText="no"
                            placement='left'
                        >
                            <DeleteOutlined style={{ cursor: "pointer", color: "orange" }} />
                        </Popconfirm>

                    </div>
                )
            },


        },

    ];

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Xoa User Thanh Cong"
            })
            await loadUser();

        } else {
            notification.error({
                message: "Error Delete User",
                description: JSON.stringify(res.message)

            })
        }

    }


    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"} />
            <UpdateUserModal
                loadUser={loadUser}
                isModelUpdate={isModelUpdate}
                setIsModelUpdate={setIsModelUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <DetailUserModal
                dataDetail={dataDetail}
                setDateDetail={setDateDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                loadUser={loadUser}
            />
        </>
    )
}

export default UserTable