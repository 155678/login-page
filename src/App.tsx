import  React , { Suspense, type FC } from "react";
import {  createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./components/AuthLayout";
import ProfilePage from "./pages/ProfilePage";
import PrivateLayout from "./components/PrivateLayout";
//import HomePage from "./pages/HomePage";
import  Cookies  from "js-cookie";
const HomePage = React.lazy (async () => await import("./pages/HomePage"));


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
        {
          path:"/",
          element: 
            <Suspense fallback={<h1>Loading...</h1>}>
              <HomePage />
            </Suspense>
        },
        {
          path:"/about",
          element: <AboutPage />
        }
    ]
  },
  {
     path:"/user",
     element: Cookies.get("token") ? <PrivateLayout /> : <Navigate to="/auth/login" />,
     children:[{
       path:"/user/profile",
       element: <ProfilePage />
     }]
  },
  {
    path:"/auth",
    element: <AuthLayout />,
    children:[
      {
        path:"/auth/login",
        element: <LoginPage />,
      },
      {
        path:"/auth/register",
        element: <RegisterPage />,
      },
    ]
  }
]);

const App: FC = () => {
  return (
     <RouterProvider  router={router} />
      )
    };

export default App

