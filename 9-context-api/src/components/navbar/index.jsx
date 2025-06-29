import { NavLink } from "react-router-dom"

import styles from "./styles.module.scss"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => isActive ? styles.active : undefined}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? styles.active : undefined}>Produtos</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.active : undefined}>Sobre</NavLink>
        </nav>
    )
}

export { Navbar }