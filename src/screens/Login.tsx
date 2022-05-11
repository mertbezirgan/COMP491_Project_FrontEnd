import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../services/auth.service";
import { Link, RouteComponentProps } from "react-router-dom";
import "../css/login.css";
import { Button } from "react-bootstrap";
import { useLocalStorage } from "usehooks-ts";
import { storageKeys } from "../services/storage.service";

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

const Login: React.FC<Props> = ({ history }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [, setCurrentUser] = useLocalStorage(storageKeys.user, null);
  const [, setLogged] = useLocalStorage(storageKeys.logged, false);

  const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = async (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;

    setMessage("");
    setLoading(true);

    let res = await login(email, password);
    console.log(res);
    setLoading(false);
    if (!res || !res.success) {
      setMessage("Please enter a valid email and password");
    } else {
      setCurrentUser(res.data);
      setLogged(true);
      history.push("/profile");
    }
  };

  return (
    <div id="login" className="container">
      <div className="col-md-5 login-card-container">
        <div className="card card-container p-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
                <h3>Login To Your Account</h3>
              </div>
              <div className="form-group">
                <label className="mt-4 mb-2" htmlFor="email">
                  Email
                </label>
                <Field name="email" type="text" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label className="mt-4 mb-2" htmlFor="password">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group mt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  style={{ display: "block", marginLeft: "auto" }}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </Button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}

              <div
                style={{
                  fontStyle: "italic",
                  textAlign: "center",
                }}
                className="mt-4"
              >
                Still do not have an account?{" "}
                <Link
                  to="/register"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Link>{" "}
                here!
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
