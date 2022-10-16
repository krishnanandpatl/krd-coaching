import Head from 'next/head';
import styles from '../styles/Auth.module.css'
import Link from 'next/link'


const Login=()=>{
    return (
        <>
        <Head>
            <>
      <title>KRD | Login</title>
      <meta charset="UTF-8"></meta>
      <meta name="description" content="Prepare for all type of Government Exams with the best Facility and teachers from Prayagraj in Maharajganj only."></meta>
      <meta name="keywords" content="coaching,maharajganj,best teacher maharajganj,
       krd maharajganj,climax coaching, upp maharajganj, tet maharajganj, pet maharajganj,
       glorious coaching, coaching classes maharajganj, little flower school, pt. deen dayal school,
       dnic chowk,mahavidalya,maharajganj news,agniveer,tutor,best coaching
       maharajganj,super tet maharajganj, upsi maharajganj, ssc-gd, ugcnet, ugc net maharajganj,
       lekhpal maharajganj,reasoning, railway maharajganj"></meta>
      <meta name="author" content="Krishna Nand Patel"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </>
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