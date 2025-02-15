import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  ">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className=" border-teal-200 border-1 rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-1/2">
          <h3 className="text-center font-bold text-2xl">Login</h3>

          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              name="email"
              className="p-2 border-2 border-teal-300 shadow-md rounded-md"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              className="p-2 border-2 border-teal-300 shadow-md rounded-md"
            />
          </label>
          <button
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 cursor-pointer hover:bg-teal-500 duration-300"
            type="submit"
          >
            Login
          </button>
          <p>
            New to Phonebook?
            <Link to="/register" className="ml-2 text-teal-500">
              Create an account
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
