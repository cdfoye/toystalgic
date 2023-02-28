import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import BackgroundImg from "../assets/pushups.jpg";
// import { motion } from "framer-motion";

import "./LoginStyles.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="green-out">
    <div className="login background">
      <img className="img" src={BackgroundImg} alt="robot doing pushups" />
      <div className="login-heading">
        <Link to="/signup" className="hvr-bounce-in">
          Go to Signup →
        </Link>
        <h2>Login</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="email-form">
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="enter your email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div className="password-form">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="enter your password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>

          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}

          <div className="submit-btn">
            <button type="submit" className="login-submit-btn hvr-buzz">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div></div>
  );
}

export default Login;
