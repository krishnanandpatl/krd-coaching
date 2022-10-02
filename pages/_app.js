import '../styles/globals.css'
import Layout from '../components/Layout'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
