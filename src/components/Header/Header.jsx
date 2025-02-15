import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between justify-center items-center bg-blue-600 p-4 shadow-md ">
      {isLoggedIn && <h3 className="p-4"> Hello there, {user.name}</h3>}
      <nav className="flex gap-4 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? (
          <button
            className="cursor-pointer "
            onClick={() => dispatch(logoutThunk())}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
