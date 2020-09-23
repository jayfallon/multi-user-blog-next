import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "actions/auth";
import Router from "next/router";

export default function SigninComp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  useEffect(() => {
    if (isAuth()) {
      if (isAuth().role == 1) {
        Router.push(`/admin`);
      } else {
        Router.push(`/user`);
      }
      setValues({ ...values, showForm: false });
    }
  }, []);

  const { email, password, error, loading, message, showForm } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // save user token to cookie
        //save user info to localStorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role == 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">loading...</div> : null;
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : null;
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : null;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Type your email"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Type your password"
            className="form-control"
            onChange={handleChange("password")}
            value={password}
          />
        </div>
        <div>
          <button className="btn btn-primary">Sign in</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signinForm()}
    </React.Fragment>
  );
}
