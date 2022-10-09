import Head from 'next/head';
import styles from '../styles/Auth.module.css'
import Link from 'next/link'


const Login=()=>{
    return (
        <>
        <Head>
      <title>KRD | Login</title>
    </Head>
    <div className={styles.loginContainer}>
        <div className={styles.data}>
            <h1>LOGIN</h1>
            <p>Enter Email:</p>
            <input type="email" placeholder='Email'></input>
            <p>Enter Password:</p>
            <input type="text" placeholder='Password'></input>
            <button>Login</button>
            <div className={styles.bottom}>
            <Link href='/signup'><a>Signup</a></Link>
            <Link href='/forgotpassword'><a>Forgot Password?</a></Link>
            </div>
        </div>
    </div>
    </>
    )
}
export default Login;