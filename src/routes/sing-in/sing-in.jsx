import { signInWithGooglePopup } from "../../utils/firebase/firebase.js";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.js";

export default function SingIn() {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();  //user comming from destructuring a responce.
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sing in page</h1>
      <button onClick={logGoogleUser}>
        Sign In With Google Popup
      </button>
    </div>
  )
}