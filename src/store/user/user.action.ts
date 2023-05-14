import { USER_ACTION_TYPES } from "./user.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { UserData, AdditionalInfo } from "../../utils/firebase/firebase";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export type GoogleSingInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSingInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {email: string, password: string, displayName: string}>;

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user: UserData, additionalDetails: AdditionalInfo}>;

export type SingUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const checkUserSession = withMatcher((): CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser=>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const googleSingInStart = withMatcher((): GoogleSingInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSingInStart = withMatcher((email: string, password: string): EmailSingInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMatcher((user: UserData): SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((error: Error): SignInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));

export const signUpSuccess = withMatcher((user: UserData, additionalDetails: AdditionalInfo): SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const singUpFailed = withMatcher((error: Error): SingUpFailed =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error): SignOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));








// JS

// import { USER_ACTION_TYPES } from "./user.types";
// import { createAction } from "../../utils/reducer/reducer.utils";

// export const setCurrentUser = (user) =>
//   createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// export const googleSingInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

// export const emailSingInStart = (email, password) =>
//   createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

// export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

// export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

// export const signUpStart = (email, password, displayName) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });

// export const signUpSuccess = (user, additionalDetails) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

// export const singUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

// export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);

// export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

// export const signOutFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
