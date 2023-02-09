import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyAFks44y_WKsVn5iLgmi2ZWuP3sI_WJI2g",
  authDomain: "eshop-44922.firebaseapp.com",
  projectId: "eshop-44922",
  storageBucket: "eshop-44922.appspot.com",
  messagingSenderId: "964441865547",
  appId: "1:964441865547:web:6f9cc78ef02e28dc9ffcce"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;