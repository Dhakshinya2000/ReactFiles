import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login'
import Home from './Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NotFound from './NotFound';
import Counter from './Counter';
import Post from './Post';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home />,
    errorElement:<NotFound />
  },
  {
    path: '/login',
    element : <Login />
  },
  {
    path:"/counter",
    element:<Counter />
  },
  {
    path:'/post/:id',
    element:<Post />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
