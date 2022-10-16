import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'

function about() {
  return (
    <>
    <Head>
      <title>KRD | About</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Head>
    <div className={styles.abc}>
    <a href='https://m.facebook.com/profile.php?id=100068194983623&_rdr'><i class="fa-brands fa-facebook fa-3x"></i></a>
    <i class="fa-brands fa-twitter fa-3x"></i>
    <a href='https://wa.me/9610417489'><i class="fa-brands fa-whatsapp fa-3x"></i></a>
    <i class="fa-brands fa-telegram fa-3x"></i>
    <a href="mailto:someone@gmail.com"><i class="fa-solid fa-envelope fa-3x"></i></a>
    <i class="fa-solid fa-map-location-dot fa-3x"></i>
    </div>
    </>
  )
}

export default about