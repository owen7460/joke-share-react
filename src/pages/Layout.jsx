import { Outlet,NavLink } from "react-router-dom";


const Layout = ()=> {
  return (
    <div>
      <h1>Joke Share Layout page</h1>
      <hr />
      <NavLink
          to="/jokes"
          style={({ isActive }) => ({
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: isActive ? "700" : "500",
            color: isActive ? "#2563eb" : "#333",
            borderBottom: isActive ? "3px solid #2563eb" : "3px solid transparent",
            paddingBottom: "6px",
            transition: "0.2s",
          })}
        >
          😂 Jokes
        </NavLink>
         <span> -- </span>
               <NavLink
          to="/submit"
          style={({ isActive }) => ({
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: isActive ? "700" : "500",
            color: isActive ? "#2563eb" : "#333",
            borderBottom: isActive ? "3px solid #2563eb" : "3px solid transparent",
            paddingBottom: "6px",
            transition: "0.2s",
          })}
        >
          ✍️ Submit Joke
        </NavLink>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;