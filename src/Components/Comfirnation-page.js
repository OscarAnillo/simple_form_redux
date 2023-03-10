import { useSelector } from "react-redux";

export const ConfirmationPage = () => {
  const { name, email, password } = useSelector(
    (state) => state.formSlice.userInput
  );
  return (
    <div className="thanks">
      <h1>Thanks for providing us your information!</h1>
      <div className="selector">
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
      </div>
    </div>
  );
};
