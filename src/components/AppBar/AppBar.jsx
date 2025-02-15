import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="flex justify-between  items-center bg-blue-600 p-4 shadow-md ">
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};
export default AppBar;
