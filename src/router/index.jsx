import { createBrowserRouter } from 'react-router-dom';
import Layout from "../pages/Layout";
import Jokes from "../pages/Jokes";
import SubmitJoke from "../pages/SubmitJoke"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {index:true, element:<Jokes />},
      {path: "jokes", element: <Jokes />},
      {path: "submit", element:<SubmitJoke />},
    ]
  }
])

export default router;