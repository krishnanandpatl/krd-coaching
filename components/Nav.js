import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav=()=>{
    return (
    <>
    <div className={styles.navbar}>
        <Link href='/'><a className={styles.title}>KRD</a></Link>
        <div className={styles.navLeft}>
            <Link href='/teachers'><a>Teachers</a></Link>
            <Link href='/login'><a>Login</a></Link>
        </div>
    </div>
    </>
    );
}
export default Nav;