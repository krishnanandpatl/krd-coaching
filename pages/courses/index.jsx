import Head from 'next/head'
import styles from '../../styles/Batch.module.css'
import batches from './batches.json'
const Batches=()=>{
    return (
        <>
        <Head>
            <>
            <title>KRD | Batches</title>
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
            {batches.map(batch=>(
                <div key={batch.id}>
                    <div className={styles.batchContainer}>
                        <div className={styles.picContainer}></div>
                        <div className={styles.batchDetail}>

                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default Batches;