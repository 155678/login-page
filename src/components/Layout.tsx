import  { type FC } from 'react'
import { Outlet , Link } from 'react-router-dom'
import Cookies from "js-cookie"

const Layout: FC = () => {
  return (
    <>
     <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {Cookies.get("token") ? (<Link to="user/profile">Profile</Link>) : null }
      {!Cookies.get("token") ? (<Link to="login">Login</Link>) : null}
        <h1>Header</h1>
     </header>
     <main>            
      <Outlet />                      
     </main>
     <footer><h1>footer</h1></footer>    
    </> 
  )
}

export default Layout


