import { createContext, useState } from "react";

export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
});



export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    })
    const [isApploading, setIsAppLoading] = useState(true);
    return (
        <AuthContext.Provider value={{ user, setUser, isApploading, setIsAppLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}