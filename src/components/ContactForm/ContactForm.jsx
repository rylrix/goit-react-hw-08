import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[+\d\s\-()]+$/, "Number must contain only digits")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
        validationSchema={registerSchema}
      >
        <Form className={s.container}>
          <label>
            <span>Name</span>
            <Field type="text" name="name" id="name" className={s.username} />
          </label>
          <ErrorMessage name="name" className={s.error} component="div" />
          <label>
            <span>Number</span>
            <Field type="tel" name="number" id="number" className={s.number} />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
