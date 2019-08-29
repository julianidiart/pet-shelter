import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider
} from "../firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
