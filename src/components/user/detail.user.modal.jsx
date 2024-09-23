import { Button, Drawer, notification } from "antd"
import { useState } from "react"
import { handleUploadFile, updateUserAvatarApi } from "../../service/api.service"


const DetailUserModal = (props) => {
    const { dataDetail, setDateDetail, isDetailOpen, setIsDetailOpen, loadUser } = props

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }




    }
    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;

            const resUpdateAvatar = await updateUserAvatarApi(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);

            if (resUpdateAvatar.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "update user avatar",
                    description: "update user avatar thanh cong"
                })
            } else {
                notification.error({
                    message: "Error Upload Avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }

        } else {
            notification.error({
                message: "Error Upload File",
                description: JSON.stringify(resUpload.message)
            })
        }
    }
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
                <div
                    style={{
                        marginTop: "10px",
                        height: "100px", width: "150px",
                        border: "1px solid #ccc"
                    }}
                >
                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                    <input
                        type="file" hidden id="btnUpload"
                        // onChange={handleOnChangeFile}
                        onChange={(event) => { handleOnChangeFile(event) }}
                    />
                </div>
                {preview &&
                    <>
                        <div
                            style={{
                                marginTop: "10px",
                                height: "100px", width: "150px",
                                marginBottom: "10px"
                            }}
                        >
                            <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                src={preview} />
                        </div>
                        <Button type='primary'
                            onClick={() => handleUpdateUserAvatar()}
                        >Save</Button>
                    </>
                }
            </>
                :
                <>
                    <p>Dữ Liệu Trống</p>
                </>
            }
        </Drawer >
    )


}

export default DetailUserModal