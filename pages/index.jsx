import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tabuleiro from './components/Tabuleiro'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Tabuleiro</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tabuleiro
        </h1>
        <Tabuleiro />
      </main>
       
      <footer className={styles.footer}>
        <span>
            Todos os direitos reservados a Erickson Martinez
          </span>
      </footer>
    </div>
  )
}
