import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ContactsPage from "../pages/ContactsPage";
import LoginForm from "../pages/LoginPage";
import RegistrationForm from "../pages/RegistrationPage";

import { fetchContacts } from "../redux/contacts/operations";
import { refreshUserThunk } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import Layout from "./Layout";
import PrivateRoute from "../PrivateRoute";
import "./App.module.css";
import RestrictedRoute from "../RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginForm />}
                redirectTo="/contacts"
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
