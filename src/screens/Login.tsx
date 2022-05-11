import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../services/auth.service";
import { Link, RouteComponentProps } from "react-router-dom";
import "../css/login.css";
import { Button } from "react-bootstrap";

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

const Login: React.FC<Props> = ({ history }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setMessage("");
    setLoading(true);

    login(username, password).then(
      () => {
        history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
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
                <label className="mt-4 mb-2" htmlFor="username">
                  Username
                </label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
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
