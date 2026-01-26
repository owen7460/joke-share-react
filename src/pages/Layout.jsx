import { Outlet,Link } from "react-router-dom";


const Layout = ()=> {
  return (
    <div>
      <h1>Joke Share Layout page</h1>
      <hr />

      <Link to="/Jokes">To Jokes</Link>
      <span> -- </span>
      <Link to="/Submit">To Submit</Link>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;