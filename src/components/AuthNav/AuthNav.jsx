import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex gap-3">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
export default AuthNav;
