import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Soobre o Mini <span>Blog</span></h2>
            <p>
                Este projeto consiste em um blog feito com React no front-end e Firebase
                no back-end. 
            </p>
            <Link to="/posts/new" className="btn">
                Criar post
            </Link>
        </div>
    )
}

export { About }