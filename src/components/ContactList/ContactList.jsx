import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
      {error && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default ContactList;
