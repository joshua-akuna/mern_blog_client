import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Authors from './pages/Authors'
import AuthorPost from './pages/AuthorPosts'
import CategoryPosts from './pages/CategoryPosts'
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import EditPost from './pages/EditPost'
import Login from './pages/LoginPage'
import Logout from './pages/Logout'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home/>},
      {path: 'posts/users/:id', element: <AuthorPost/>},
      {path: 'authors', element: <Authors/>},
      {path: 'posts/categories/:category', element: <CategoryPosts/>},
      {path: 'create', element: <CreatePost/>},
      {path: 'boardposts/:id', element: <Dashboard/>},
      {path: 'posts/:id/edit', element: <EditPost/>},
      {path: 'login', element: <Login/>},
      {path: 'logout', element: <Logout/>},
      {path: "posts/:id",  element: <PostDetail/>},
      {path: 'register', element: <Register/>},
      {path: 'profile/:id', element: <UserProfile/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)