import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth"
import { useDispatch } from "react-redux";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { SignUpContainer } from './sing-up-form.styles';
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function SingUpForm() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }

    try {
      // const { user } = await createAuthUserWithEmailAndPassword(email, password); //user from destructuring console.loged response.
      // await createUserDocumentFromAuth(user, { displayName });
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      // if (error.code === "auth/email-already-in-use") {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Can not create user, email already in use.')
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value }) //whenever you have to use a variable's value as a key in Object, you have to use it in [ ].
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} >
        <FormInput
          label="Username"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sing Up</Button>
      </form>
    </SignUpContainer>
  )
}
