import Link from "next/link"
const Nopage=()=>{
    return (
        <>
        <h1>Oops......</h1>
        <h2>Page Not Found.</h2>
        <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
        </>
    )
}
export default Nopage;