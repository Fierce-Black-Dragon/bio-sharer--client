import React, { useState } from "react";
import axios from "axios";

type Props = {
  handleSuccessfulAuth: (data: any) => void;
};

const Auth: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "username":
        setUserName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "password_confirmation":
        setPasswordConfirmation(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    axios
      .post(
        "http://localhost:3000/registrations",
        {
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={passwordConfirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Auth;
