import teachers from './teacher.json'
export const getStaticPaths=async()=>{
    const paths=teachers.map(teacher=>{
        return {
            params: {id : teacher.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps=async(context)=>{
    const id=context.params.id;
    const data=teachers[id-1];
    return {
        props:{tDetail:data}
    }
}
const Teacher=({tDetail})=>{
    return (
        <>
        <h1>{tDetail.name} </h1>
        <h1>{tDetail.contact}</h1>
        </>
    )
    }
    export default Teacher;