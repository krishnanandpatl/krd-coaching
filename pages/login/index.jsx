import Head from 'next/head';
import styles from '../../styles/Login.module.css'

const Login=()=>{
    return (
        <>
        <Head>
      <title>KRD | Login</title>
    </Head>
    <div className={styles.loginContainer}>
        <div className={styles.data}>
            <p>Enter email:</p>
            <input type="email" placeholder='Email'></input>
            <p>Enter Password:</p>
            <input type="text" placeholder='Password'></input>
        </div>
        <div className={styles.button}>
            <button>Signup</button>
            <button>Login</button>
        </div>
        <a>Forgot Password?</a>
    </div>
    </>
    )
}
export default Login;