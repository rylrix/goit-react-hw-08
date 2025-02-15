import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav className="flex gap-4 ">
        <NavLink to="/">Home</NavLink>
        {loggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
    </>
  );
};
export default Navigation;
