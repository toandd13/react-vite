import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DetailUserModal from './detail.user.modal';

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
                        <DeleteOutlined style={{ cursor: "pointer", color: "orange" }} />
                    </div>
                )
            },


        },

    ];
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
            />
        </>
    )
}

export default UserTable