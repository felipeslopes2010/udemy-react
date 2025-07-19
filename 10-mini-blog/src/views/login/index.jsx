import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { useAuth } from '../../hooks/use-auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, error: authError, isLoading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password
        }

        await login(user);
    }

    useEffect(() => {
        if(authError) {
            setError(authError);
        }
    },[authError])

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça o login para poder utilizar o sistema</p>
            <form onSubmit={handleSubmit}>
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
                <button className="btn" disabled={isLoading}>Entrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export { Login }