import { Drawer } from "antd"
// import { useState } from "react"

const DetailUserModal = (props) => {
    const { dataDetail, setDateDetail, isDetailOpen, setIsDetailOpen } = props

    return (
        <Drawer
            width={"40vw"}
            title="Chi Tiết User"
            onClose={() => {
                setDateDetail(null)
                setIsDetailOpen(false)
            }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>ID:{dataDetail._id}</p>
                <br />
                <p>Full Name:{dataDetail.fullName}</p><br />
                <p>Email:{dataDetail.email}</p><br />
                <p>Phone:{dataDetail.phone}</p><br />
                <p>Role:{dataDetail.role}</p><br />

                <p>AVATAR:</p>
                <div>
                    <img width={200} height={150}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload"
                        style={{
                            display: "block",
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "5px 10px",
                            background: "orange",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >UploadAvatar</label>
                    <input type="file" hidden id="btnUpload" />
                </div>
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