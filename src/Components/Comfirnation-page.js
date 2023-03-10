import { useSelector, useDispatch } from "react-redux";
import { setClearStatus } from "../Redux/Features/form-slice";

export const ConfirmationPage = ({ setIsSubmitted }) => {
  const { name, email, password } = useSelector(
    (state) => state.formSlice.userInput
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    setIsSubmitted(false);
    dispatch(setClearStatus());
  };

  return (
    <div className="thanks">
      <h1>Thanks for providing us your information!</h1>
      <div className="selector">
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
      </div>
      <button onClick={clickHandler}>Clear</button>
    </div>
  );
};
