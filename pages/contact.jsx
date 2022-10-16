import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'

function about() {
  return (
    <>
    <Head>
      <>
      <title>KRD | About</title>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </>
    </Head>
    <div className={styles.abc}>
    <a href='https://m.facebook.com/profile.php?id=100068194983623&_rdr'><i class="fa-brands fa-facebook fa-3x"></i></a>
    <i class="fa-brands fa-twitter fa-3x"></i>
    <a href='https://wa.me/9599576365'><i class="fa-brands fa-whatsapp fa-3x"></i></a>
    <i class="fa-brands fa-telegram fa-3x"></i>
    <a href="mailto:krddevendra@gmail.com"><i class="fa-solid fa-envelope fa-3x"></i></a>
    <i class="fa-solid fa-map-location-dot fa-3x"></i>
    </div>
    </>
  )
}

export default about