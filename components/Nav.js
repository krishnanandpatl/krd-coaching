import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Nav=()=>{
    return (
    <>
    <div className={styles.navbar}>
        <Link href='/'><Image src='/KRD1.png' height='48px' width='60px'></Image></Link>
        <div className={styles.navLeft}>
            <a className={styles.batches}>Batches</a>
            <Link href='/teachers'><a className={styles.teachers}>Teachers</a></Link>
            <Link href='/login'><a className={styles.login}>Login</a></Link>
        </div>
    </div>
    </>
    );
}
export default Nav;