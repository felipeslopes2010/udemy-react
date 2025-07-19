import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from "react";
import { app } from '../../firebase/config';

const useAuth = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth(app);

    const checkIfCancelled = () => {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfCancelled();

        setIsLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });

            setIsLoading(false);

            return user;
        } catch (error) {
            console.log('code:', error.code);
            console.log('message:', error.message);

            let systemErrorMessage;

            if (error.code === 'auth/weak-password') {
                systemErrorMessage = 'A senha precisa conter 6 ou mais caracteres.';
            } else if (error.code === 'auth/email-already-in-use') {
                systemErrorMessage = 'E-mail já cadastrado.';
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.';
            }

            setIsLoading(false);
            setError(systemErrorMessage);
        }
    };

    const login = async ({email, password}) => {
        checkIfCancelled();

        setIsLoading(true);
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, email, password);

            setIsLoading(false);
        } catch(error) {
            console.log('code:', error.code);
            console.log('message:', error.message);

            let systemErrorMessage;

            if(error.code === 'auth/invalid-credential') {
                systemErrorMessage = 'Usuário e/ou senha incorretos'
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde'
            }

            setError(systemErrorMessage);
            setIsLoading(false);
        }
    }

    const logout = async () => {
        checkIfCancelled();

        await signOut(auth);
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        auth,
        createUser,
        error,
        isLoading,
        login,
        logout,
    }
}

export { useAuth }