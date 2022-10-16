import Head from 'next/head'
import styles from '../../styles/Batch.module.css'
import batches from './batches.json'
const Batches=()=>{
    return (
        <>
        <Head>
            <title>KRD | Batches</title>
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