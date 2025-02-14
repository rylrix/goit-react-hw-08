import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { IoPerson, IoCall } from "react-icons/io5";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div>
        <p>
          <IoPerson size={20} className={s.icon} />
          {name}
        </p>
        <p>
          <IoCall size={20} className={s.icon} />
          {number}
        </p>
      </div>

      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};
export default Contact;
