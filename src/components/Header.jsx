import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h2>{props.title}</h2>
      <Link href="/">Voltar</Link>
    </header>
  )
}