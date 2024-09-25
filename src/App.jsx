import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './service/api.service'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'
import { Spin } from 'antd'

const App = () => {

  const { setUser, isApploading, setIsAppLoading } = useContext(AuthContext)

  useEffect(() => {
    fetchUserInfo();
  }, [])

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      //success
      setUser(res.data.user)
    }
    setIsAppLoading(false)
  }

  return (
    <>
      {isApploading === true ?
        <Spin />
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }


    </>
  )
}


export default App
