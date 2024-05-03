import  { type FC } from 'react'
import { Outlet  } from 'react-router-dom'

const AuthLayout: FC = () => {
  return (
  <>
    <main>
      <Outlet />
    </main>
    <footer>
      <h1>Authenticate footer</h1>
    </footer>
    </>
  )
}

export default AuthLayout

