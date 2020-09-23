import { useState, useEffect } from "react";
import { signup, isAuth } from "actions/auth";
import Router from "next/router";

export default function SignupComp() {
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
      Router.push(`/`);
      setValues({ ...values, showForm: false });
    }
  }, []);

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
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

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Type your name"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
          />
        </div>
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
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signupForm()}
    </React.Fragment>
  );
}
