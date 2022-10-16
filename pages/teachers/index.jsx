import Head from 'next/head'
import styles from '../../styles/Teacher.module.css';
import teachers from './teacher.json'
import Link from 'next/link'

//export const getStaticProps=async()=>{
    //const res=await fetch("../../public/teacher.json");
    //const data=await res.json();
   // const data=JSON.parse(teacher);
   // return {
    //    props:{teachers:data}
    //};
//}
const Teachers=()=>{
return (
    <>
    <Head>
        <>
        <title>KRD | Teachers</title>
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
    <div className={styles.teachers}>
       {teachers.map(teacher=>(
        <div key={teacher.id}>
            <div className={styles.teacherContainer}>
                <div className={styles.imgContainer}>
                    <img src={teacher.img} alt="img" height="223px" width="198px" />
                </div>
                <Link href={'/teachers/'+teacher.id}><a className={styles.name}>{teacher.name}</a></Link>
            </div>
        </div>
       ))}
    </div>
    </>
)
}
export default Teachers;