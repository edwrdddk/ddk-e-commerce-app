import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed } from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";

export function* getSnapchotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    // console.log(userSnapshot);
    // console.log(userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup); //user from the auth object we get back.
    yield call(getSnapchotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {  //destructing action
  try {
    const { user } = yield call(
      singInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapchotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapchotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}