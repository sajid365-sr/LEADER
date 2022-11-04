
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
import toast from 'react-hot-toast';



export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Google/Facebook/GitHub sign up
    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Email/Password sign up
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Email/Password login
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // Monitor current user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (createUser =>{
            setUser(createUser);
            toast.success("Login Successfully");
            setLoading(false);
        }))
        return () =>{
            unsubscribe();
        }
    },[])

    // update profile
    const updateUserInfo = (profile) =>{
        return updateProfile(auth.currentUser, profile)
     }


    const authInfo = {user, providerLogin, createUser, signIn, logOut, loading, setLoading, updateUserInfo};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;