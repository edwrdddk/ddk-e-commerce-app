import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sing-in-form.scss";

const defaultFormFields = {
  email: '',
  password: '',
}

export default function SingInForm() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const singInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();  //user comming from destructuring a responce.
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await singInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password":
          alert ("Wrong password.");
          break
        case "auth/user-not-found":
          alert ("User not found.");
          break
        default:
          console.log(error);
      }
      // if (error.code === "auth/wrong-password" || "auth/user-not-found") {
      //   alert ("Wrong email or password.")
      // } else {
      //   console.log(error);
      // }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value }) //whenever you have to use a variable's value as a key in Object, you have to use it in [].
  };

  return (
    <div className="sing-in-container ">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} >
      {/* autoComplete="off" */}
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
        <div className="buttons-container">
          <Button type="submit">Sing In</Button>
          <Button type="button" buttonType="google" onClick={singInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}