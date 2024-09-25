import { useContext } from "react"
import { AuthContext } from "../components/context/auth.context"
import { Link, Navigate } from "react-router-dom"
import { Button, Result } from "antd"

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext)

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    // return (< Navigate to="/login" replace />)
    return (
        <Result
            status="403"
            title={"Unauthorize"}
            subTitle={"Ban can dang nhap de truy cap nguon tai nguyen nay"}
            extra={
                <Button type="primary" key="console">
                    <Link to={"/"}>Back to homepage</Link>
                </Button>
            }
        />
    )
}
export default PrivateRoute