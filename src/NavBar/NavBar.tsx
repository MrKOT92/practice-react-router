import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar():JSX.Element {

    return(

        <nav className={styles.container}>
            <NavLink className={styles.link} to="light">Light</NavLink>
            <NavLink className={styles.link} to="example2">Example2</NavLink>
            <NavLink className={styles.link} to="themeswitcher">ThemeSwitcher</NavLink>

            
        </nav>
    )
}