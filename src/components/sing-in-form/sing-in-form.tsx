import { useState, useContext, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
// import { UserContext } from "../../contexts/user.context";
// import {
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   singInAuthUserWithEmailAndPassword
// } from "../../utils/firebase/firebase";
import { SignInContainer, ButtonsContainer } from './sing-in-form.styles';
import { googleSingInStart, emailSingInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: '',
  password: '',
}

export default function SingInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const singInWithGoogle = async () => {
    dispatch(googleSingInStart());
    // await signInWithGooglePopup();  //user comming from destructuring a responce.
    // // setCurrentUser(user);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSingInStart(email, password));
      // const { user } = await singInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      // switch (error.code) {
      //   case "auth/wrong-password":
      //     alert("Wrong password.");
      //     break
      //   case "auth/user-not-found":
      //     alert("User not found.");
      //     break
      //   default:
      //     console.log(error);
      // }
      console.log("User sing in failed", error);
      
      
      // if (error.code === "auth/wrong-password" || "auth/user-not-found") {
      //   alert ("Wrong email or password.")
      // } else {
      //   console.log(error);
      // }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value }) //whenever you have to use a variable's value as a key in Object, you have to use it in [].
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sing In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={singInWithGoogle}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}