import { changeFilter, filterSelector } from "../../redux/filterSlice";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector(filterSelector);
  return (
    <div className={s.container}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
export default SearchBox;
