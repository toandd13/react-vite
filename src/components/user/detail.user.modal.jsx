import { Drawer } from "antd"
import { useState } from "react"

const DetailUserModal = (props) => {
    const { dataDetail, setDateDetail, isDetailOpen, setIsDetailOpen } = props

    return (
        <Drawer title="Chi Tiết User"
            onClose={() => {
                setDateDetail(null)
                setIsDetailOpen(false)
            }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>ID:{dataDetail._id}</p>
                <p>Full Name:{dataDetail.fullName}</p>
                <p>Email:{dataDetail.email}</p>
                <p>Phone:{dataDetail.phone}</p>
                <p>Role:{dataDetail.role}</p>
            </>
                :
                <>
                    <p>Dữ Liệu Trống</p>
                </>
            }
        </Drawer>
    )


}

export default DetailUserModal