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
    <div>
       {teachers.map(teacher=>(
        <div key={teacher.id}>
            <a className={styles.single}>
                <h3>{teacher.name}</h3>
            </a>
        </div>
       ))}
    </div>
    </>
)
}
export default Teachers;