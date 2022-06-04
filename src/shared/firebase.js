import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";  
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxauyqxwpcn7_D-DdH1HlJmCUIAG22sYA",
    authDomain: "chimstagram-7cc2b.firebaseapp.com",
    projectId: "chimstagram-7cc2b",
    storageBucket: "chimstagram-7cc2b.appspot.com",
    messagingSenderId: "444524295760",
    appId: "1:444524295760:web:cdb70cfa8abffbbe500355",
    measurementId: "G-8KJZZB1MWN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;