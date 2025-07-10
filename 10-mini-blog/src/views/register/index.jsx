import { db } from '../../firebase/config'

import { useState, useEffect } from 'react'

import styles from './styles.module.scss'
import { useAuth } from '../../hooks/use-auth';

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, isLoading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return;
        }

        await createUser(user);
    }

    useEffect(() => {
        if(authError) {
            setError(authError);
        }
    },[authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                         type="text"
                         name="displayName"
                         value={displayName}
                         onChange={(e) => setDisplayName(e.target.value)}
                         placeholder="Nome do usuário"
                         required
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                         type="email"
                         name="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="E-mail do usuário"
                         required
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                         type="password"
                         name="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="Digite sua senha"
                         required
                    />
                </label>
                <label>
                    <span>Confirmar senha:</span>
                    <input
                         type="password"
                         name="confirmPassword"
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         placeholder="Confirme sua senha"
                         required
                    />
                </label>
                <button className="btn" disabled={isLoading}>Cadastrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export { Register }