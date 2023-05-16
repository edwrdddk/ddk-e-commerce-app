import { takeLatest, put, all, call, take } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signUpSuccess, singUpFailed, signOutSuccess, signOutFailed, EmailSingInStart, SignUpStart, SignUpSuccess } from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInfo
} from "../../utils/firebase/firebase";

export function* getSnapchotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInfo) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } 
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup); //user from the auth object we get back.
    yield* call(getSnapchotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({ payload: { email, password } }: EmailSingInStart) {  //destructing action
  try {
    const userCredential = yield* call(
      singInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if(userCredential) {
      const { user } = userCredential;
      yield* call(getSnapchotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapchotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName })); 
    }
  } catch (error) {
    yield* put(singUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
  yield* call(getSnapchotFromUserAuth, user, additionalDetails);
}


export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSingUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSingUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSingUpStart),
    call(onSingUpSuccess),
    call(onSignOutStart)
  ]);
}




 


// JS

// import { takeLatest, put, all, call, take } from "redux-saga/effects";
// import { USER_ACTION_TYPES } from "./user.types";
// import { signInSuccess, signInFailed, signUpSuccess, singUpFailed, signOutSuccess, signOutFailed } from "./user.action";
// import {
//   getCurrentUser,
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   singInAuthUserWithEmailAndPassword,
//   createAuthUserWithEmailAndPassword,
//   signOutUser,
// } from "../../utils/firebase/firebase";

// export function* getSnapchotFromUserAuth(userAuth, additionalDetails) {
//   try {
//     const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
//     // console.log(userSnapshot);
//     // console.log(userSnapshot.data());
//     yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
//   } catch (error) {
//     yield* put(signInFailed(error));
//   }
// }

// export function* signInWithGoogle() {
//   try {
//     const { user } = yield* call(signInWithGooglePopup); //user from the auth object we get back.
//     yield* call(getSnapchotFromUserAuth, user);
//   } catch (error) {
//     yield* put(signInFailed(error));
//   }
// }

// export function* signInWithEmail({ payload: { email, password } }) {  //destructing action
//   try {
//     const { user } = yield* call(
//       singInAuthUserWithEmailAndPassword,
//       email,
//       password
//     );
//     yield* call(getSnapchotFromUserAuth, user);
//   } catch (error) {
//     yield* put(signInFailed(error));
//   }
// }

// export function* isUserAuthenticated() {
//   try {
//     const userAuth = yield* call(getCurrentUser);
//     if (!userAuth) return;
//     yield* call(getSnapchotFromUserAuth, userAuth);
//   } catch (error) {
//     yield* put(signInFailed(error));
//   }
// }

// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const { user } = yield* call(createAuthUserWithEmailAndPassword, email, password);
//     yield* put(signUpSuccess(user, { displayName })); 
//   } catch (error) {
//     yield* put(singUpFailed(error));
//   }
// }

// export function* signOut() {
//   try {
//     yield* call(signOutUser);
//     yield* put(signOutSuccess());
//   } catch (error) {
//     yield* put(signOutFailed(error));
//   }
// }

// export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
//   yield* call(getSnapchotFromUserAuth, user, additionalDetails);
// }


// export function* onGoogleSignInStart() {
//   yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
// }

// export function* onCheckUserSession() {
//   yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
// }

// export function* onEmailSignInStart() {
//   yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
// }

// export function* onSingUpStart() {
//   yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
// }

// export function* onSingUpSuccess() {
//   yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

// export function* onSignOutStart() {
//   yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
// }

// export function* userSagas() {
//   yield* all([
//     call(onCheckUserSession),
//     call(onGoogleSignInStart),
//     call(onEmailSignInStart),
//     call(onSingUpStart),
//     call(onSingUpSuccess),
//     call(onSignOutStart)
//   ]);
// }