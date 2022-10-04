import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>KRD | Home</title>
    </Head>
    <div className={styles.banner}>
      <Image src='/banner/banner1.jpg' height='500vh' width='300vw'/>
      <Image src='/banner/banner2.jpg' height='500vh' width='300vw'/>
    </div>
    </>
  )
}
