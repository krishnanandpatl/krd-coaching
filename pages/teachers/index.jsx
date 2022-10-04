import Head from 'next/head'
import styles from '../../styles/Teacher.module.css';
import teachers from './teacher.json'

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
        <title>KRD | Teachers</title>
    </Head>
    <div className={styles.teachers}>
       {teachers.map(teacher=>(
        <div key={teacher.id}>
            <div className={styles.teacherContainer}>
                <div className={styles.imgContainer}>
                    <img src={teacher.img} alt="img" height="223px" width="198px" />
                </div>
                <a className={styles.name}>{teacher.name}</a>
            </div>
        </div>
       ))}
    </div>
    </>
)
}
export default Teachers;