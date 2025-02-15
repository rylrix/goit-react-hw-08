import { useDispatch, useSelector } from "react-redux";

import { filterSelector } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

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
