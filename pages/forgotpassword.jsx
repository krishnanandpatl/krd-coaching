import Head from 'next/head';
import styles from '../styles/Auth.module.css'


const fPassword=()=>{
    return (
        <>
        <Head>
      <title>KRD | Foegot Password</title>
    </Head>
    <div className={styles.loginContainer}>
            
        <div className={styles.data}>
            <h1>RESET PASSWORD</h1>
            <p>Enter Email:</p>
            <input type="email" placeholder="Email"></input>
            <button>Send OTP</button>
        </div>
    </div>
    </>
    )
}
export default fPassword;