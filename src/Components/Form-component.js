import { useState } from "react";

import { useDispatch } from "react-redux";
import { setUserDataInput } from "../Redux/Features/form-slice";

import { ConfirmationPage } from "./Comfirnation-page";

export const FormComponent = () => {
  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const { name, email, password } = userInputs;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please provide all values!");
      return;
    }
    dispatch(setUserDataInput({ ...userInputs }));
    setUserInputs({ name: "", email: "", password: "" });
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Oscar Anillo</h1>
      <p>Web UI Developer</p>
      {!submitted ? (
        <div className="div-form">
          <form
            method="POST"
            autoComplete="new-password"
            className="form"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <ConfirmationPage setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
};
