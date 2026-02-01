import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout, Jokes, SubmitJoke, Weather, Collections } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Jokes /> },
      // { index: true, element: <Navigate to="/jokes" replace /> },
      { path: 'jokes', element: <Jokes /> },
      { path: 'submit', element: <SubmitJoke /> },
      { path: 'weather', element: <Weather /> },
      { path: 'collections', element: <Collections /> },
    ],
  },
])

export default router
