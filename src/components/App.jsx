import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ContactsPage from "../pages/ContactsPage";
import LoginForm from "../pages/LoginPage";
import RegistrationForm from "../pages/RegistrationPage";

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import Layout from "./Layout";
import PrivateRoute from "../PrivateRoute";
import "./App.module.css";
import RestrictedRoute from "../RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
            <RestrictedRoute component={<LoginForm />} redirectTo="/contacts" />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
