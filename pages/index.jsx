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
      <>
      <title>KRD | Home</title>
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
