import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// eslint-disable-next-line
export const createUser = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// eslint-disable-next-line
export const signIn = (setState, state, auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setState({ ...state, hasAccount: true });
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// eslint-disable-next-line
export const signOut = (auth, navigate) => {
  signOut(auth)
    .then(() => {
      navigate;
    })
    .catch((error) => {
      console.log(error);
    });
};
