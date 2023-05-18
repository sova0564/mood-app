import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCPpIowLaynJ5vn5zKopNq_47ZkCnm6xrY",
  authDomain: "mood-app-afb9a.firebaseapp.com",
  projectId: "mood-app-afb9a",
  storageBucket: "mood-app-afb9a.appspot.com",
  messagingSenderId: "17549519344",
  appId: "1:17549519344:web:f7387745804abd39e21535",
};
// eslint-disable-next-line
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
