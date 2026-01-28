import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Jokes from '@/pages/Jokes'
import SubmitJoke from '@/pages/SubmitJoke'
import Weather from '@/pages/Weather'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/jokes" replace /> },
      { path: 'jokes', element: <Jokes /> },
      { path: 'submit', element: <SubmitJoke /> },
      { path: 'weather', element: <Weather /> },
    ],
  },
])

export default router
