import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Home() {
  const images=["/banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg"]
  return (
    <>
    <Head>
      <title>KRD | Home</title>
    </Head>
     
     <div>
      <Slide>
            <div className={styles.eachslideeffect}>
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className={styles.eachslideeffect}>
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Class</span>
                </div>
            </div>
            <div className={styles.eachslideeffect}>
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Exam</span>
                </div>
            </div>
            <div className={styles.eachslideeffect}>
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>Yoga</span>
                </div>
            </div>
        </Slide>
      </div>
    </>
  )
}
