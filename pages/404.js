import Head from 'next/head'
import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const Nopage=()=>{
    const route=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            route.push('/');
        },5000)
    },[]);
    return (
        <>
        <Head>
      <title>KRD | 404</title>
    </Head>
        <>
        <h1>Oops......</h1>
        <h2>Page Not Found.</h2>
        <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
        </>
        </>
    )
}
export default Nopage;