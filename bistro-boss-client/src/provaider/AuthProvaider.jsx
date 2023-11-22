import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.confing";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();
const googleProvaider = new GoogleAuthProvider();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // user create email or password
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user  login email or password
  const loginUserWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user  login email popup
  const loginUserWithEmailPopup = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };

  // user profile update
  const userProfileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // user  login email or password
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  // user observer ------------
  useEffect(() => {
    const userObserver = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // TODO: token create
        const user = { email: currentUser.email };
        await axiosPublic.post("/jwt", user).then((res) => {
          // res.data
          // console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("jwt-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        // TODO: token cancel
        localStorage.removeItem("jwt-token");
        setLoading(false);
      }
      // setLoading(false);
      console.log("Current User: ", currentUser?.email);
    });
    return () => userObserver();
  }, []);

  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    loginUserWithEmail,
    loginUserWithEmailPopup,
    logOut,
    userProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
