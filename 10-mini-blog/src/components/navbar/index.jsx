import { NavLink } from "react-router-dom"

import styles from './styles.module.scss'

import { useAuth } from '../../hooks/use-auth'
import { useAuthProvider } from "../../hooks/use-auth-provider"

const Navbar = () => {
    const { user } = useAuthProvider();
    console.log(user)

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
                </li>
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/new" className={({isActive}) => isActive ? styles.active : ''}>Novo Post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({isActive}) => isActive ? styles.active : ''}>Dashboard</NavLink>
                        </li>
                    </>
                )}
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({isActive}) => isActive ? styles.active : ''}>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({isActive}) => isActive ? styles.active : ''}>Cadastrar</NavLink>
                        </li>
                    </>
                )}
                 <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/logout" className={({isActive}) => isActive ? styles.active : ''}>Sair</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }