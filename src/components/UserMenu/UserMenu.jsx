import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const exit = async () => {
    try {
      await dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex gap-4">
      <h2>Hello there, {user.name}</h2>
      <button onClick={exit}>Logout</button>
    </div>
  );
};
export default UserMenu;
