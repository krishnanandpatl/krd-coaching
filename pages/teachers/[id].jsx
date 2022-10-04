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
    const data=teachers.id;
    console.log(data)
}
const Teacher=()=>{
    return (
        <h1>Teacher </h1>
    )
    }
    export default Teacher;