import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { fetchContacts } from "../redux/contacts/operations";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import "./App.module.css";
import ContactsPage from "../pages/ContactsPage";
import LoginForm from "../pages/LoginPage";
import RegistrationForm from "../pages/RegistrationPage";
import { refreshUserThunk } from "../redux/auth/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />

          <Route path="contacts" element={<ContactsPage />} />

          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
