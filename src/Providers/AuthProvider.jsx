import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    }, [])
    const authItem = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authItem}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;