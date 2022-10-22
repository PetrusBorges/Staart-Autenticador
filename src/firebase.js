//firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDamLK_H1P_XGu0DLgn9Lh27EgygqpfzoA",
  authDomain: "authstaart.firebaseapp.com",
  projectId: "authstaart",
  storageBucket: "authstaart.appspot.com",
  messagingSenderId: "525838892162",
  appId: "1:525838892162:web:8e97a38b36a489b738089b"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
