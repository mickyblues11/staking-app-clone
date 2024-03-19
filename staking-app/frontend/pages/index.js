import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'


export default function Home() {
  return(
    <section className={styles.main}>
        <Head>
          <title>Bean Staking</title>
        </Head>
        <Header/>
        <Main/>
    </section>
  )
}
