import React, { createContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signup with gmail
    const signUpWithGmail = () => {
      return  signInWithPopup(auth, googleProvider)
    }

    // login using email and password
    const login = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        signOut(auth);
    }

    // update profile
    const updateUserProfile = ({name, photoURL}) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider