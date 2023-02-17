import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <a href='/countries' style={{ color: 'black' }}><h1>Click for countries</h1></a>
    </main>
  )
}
