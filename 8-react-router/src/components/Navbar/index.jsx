import styles from './index.module.css'

// Aula 2 - Links com React Router
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            {/* <Link className={styles.a} to="/">
                Home
            </Link>
            <Link className={styles.a} to="/about">
                Sobre
             </Link> */
            }
            {/* Aula 8 - Link Ativo */}
            <NavLink
                to="/"
                className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
            >
                Sobre
            </NavLink>
        </nav>
    )
}

export { Navbar }