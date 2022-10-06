import Head from 'next/head';
import styles from '../styles/Auth.module.css'

const Signup=()=>{
    return (
        <>
        <Head>
      <title>KRD | Signup</title>
    </Head>
    <div className={styles.loginContainer}>
            
        <div className={styles.data}>
            <p>Enter Name:</p>
            <input type='text' placeholder='Full Name'></input>
            <p>Enter Email:</p>
            <input type="email" placeholder="Email"></input>
            <p>Enter Password</p>
            <input type="text" placeholder='Password'></input>
            <p>Confirm Password</p>
            <input type='text' placeholder='Confirm Password'></input>
            <button>Sign Up</button>
        </div>
    </div>
    </>
    )
}
export default Signup;