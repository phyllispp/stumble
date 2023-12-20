import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {  } from 'firebase/auth'
import LoginSignout from './components/LoginSignout'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import FullPost from './components/FullPost'
import Profile from './components/Profile'
import Playground from './components/Playground'
import './App.css'
import { useState } from 'react'

function App() {

const [user, setUser] = useState({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <LoginSignout setUser={setUser} user={user}/>,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/post",
    //will need the unique ID of post
    element: <FullPost />,
  },
  {
    path: "/profile",
    //will need the unique ID of profile
    element: <Profile />,
  },
  {
    path: "/playground",
    //purely for building and debugging
    element: <Playground />,
  },
]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
