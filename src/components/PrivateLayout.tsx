import { type FC } from "react"
import { Outlet } from "react-router-dom"

const PrivateLayout: FC = () => {
  return (
      (<div>
       <h1>Private User</h1>
         <Outlet />
       </div>
     )
  )
}

export default PrivateLayout
