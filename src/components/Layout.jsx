import styles from '../styles/Layout.module.css'
import Header from './Header'
import Head from './Head'


export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <Head title={props.title}></Head>

      <div className={styles.header}>
        <Header title={props.title}></Header>
      </div>

      <div className="flex flex-wrap place-content-center justify-center m-auto items-center container h-4/5">
        {props.children}
      </div>

    </div>
  )

}