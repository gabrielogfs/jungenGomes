import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../../server/Firebase';
import { auth } from '../../server/Firebase';
import CartContext from './CartContext';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const { dispatch } = useContext(CartContext);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => initializeUser(user));
        return unsubscribe;
    }, []);

    const initializeUser = async (user) => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid)
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const useData = userDocSnap.data();
                setCurrentUser({
                    ...user,
                    role: useData.role || 'user'
                });
            } else {
            setCurrentUser({ 
                ...user,
            role:'user' });
            }
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

export function useAuth() {
    return useContext(AuthContext);
}

