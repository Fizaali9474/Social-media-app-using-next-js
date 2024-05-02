

import { initializeApp } from "firebase/app";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signInWithPopup,
fbAuthProvider,
FacebookAuthProvider,

// FacebookAuthProvider,
// signInWithPopup,
} from "firebase/auth";
//
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAT2-8pmq1kSPc17MdZkVABMCNpB9Oo2Q",
  authDomain: "fir-auth-d34b1.firebaseapp.com",
  projectId: "fir-auth-d34b1",
  storageBucket: "fir-auth-d34b1.appspot.com",
  messagingSenderId: "626937676219",
  appId: "1:626937676219:web:0f7406b5d2396cfff3c49e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const facebook = new FacebookAuthProvider();//
//  SINGN_UP

export async function register(userInfo) {
  console.log(userInfo, "USerINFO");
  const { name, email, password } = userInfo;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Sign Up Successfully");
  } catch (error) {
    alert(error.message);
  }
}

//  LOGIN
export async function logIn(userInfo) {
  const { email, password } = userInfo;
  try {
    await signInWithEmailAndPassword, (auth, email, password);
    alert("Log In Successfully");
  } catch (error) {
    alert(error.message);
  }
}

export const FacebookAuthButtonClicked = async(provider) =>{
  console.log(provider, "PROVIDER")
try {console.log("TRY me")

 const result= await signInWithPopup(auth , facebook);
  console.log(result, 'RESULT')
} catch (error) {
console.log(error.message)
}
}

// Add-Post in firebase
export async function userCardItem(itemInfo) {
  try {
    console.log(itemInfo,'itemin FIR')
    const { img, des } = itemInfo;
    const storageRef = ref(storage, `images/${img.name}`);
    await uploadBytes(storageRef, img);
    const imgUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "userItem"), {
      description: des,
      image: imgUrl,
    });
    alert("Posted successfully!");
  } catch (e) {
    alert(e.message);
  }
}

// get Post from firebase
export async function getingAds() {
  const querySnapshot = await getDocs(collection(db, "userItem"));
  const ads = [];
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id;
    ads.push(ad);
  });
  return ads;
}

// Update Profile

export async function updateProfile(itemInfo) {
  try {
    const { img } = itemInfo;
    const storageRef = ref(storage, `profile/${img.name}`);
    await uploadBytes(storageRef, img);
    const imgUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "profile"), {
      image: imgUrl,
    });
    alert("Post successfully!");
  } catch (e) {
    alert(e.message);
  }
}

