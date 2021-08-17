import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rootReducer } from "./reducers";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUYemiVDWSX8OfAiiODsAFpbPjSKrpmcI",
  authDomain: "productlist-ebc48.firebaseapp.com",
  projectId: "productlist-ebc48",
  storageBucket: "productlist-ebc48.appspot.com",
  messagingSenderId: "847276940862",
  appId: "1:847276940862:web:c65ca4f1d70d1ee474fb6f",
  measurementId: "G-14YDE82H39"
};

const rrfConfig = {
  products: 'products'
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, 
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
