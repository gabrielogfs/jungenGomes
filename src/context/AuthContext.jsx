import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../server/Firebase';
import CartContext from './CartContext';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const { dispatch } = useContext(CartContext);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => initializeUser(user));
        return unsubscribe;
    }, []);

    const initializeUser = (user) => {
        if (user) {
            setCurrentUser({ ...user });
        } else {
            setCurrentUser(null);
            setTimeout(() => {
                if (dispatch) {
                    dispatch({ type: 'resetCart' });
                }
            }, 0);
        }
    };

    return <AuthContext.Provider value={{ currentUser }}>
        {children}
    </AuthContext.Provider>
}

