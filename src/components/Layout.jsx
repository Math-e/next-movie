import styles from '../styles/Layout.module.css'
import Header from './Header'
import Head from 'next/head'


export default function Layout(props) {
  return (
    <div className={"h-screen dark:bg-stone-900 dark:text-gray-100 bg-gray-100 text-stone-900"}>
      <Head>
        <title>{props.title ? props.title : "NextMovie"}</title>
      </Head>

      <div className={styles.header}>
        <Header title={props.title}></Header>
      </div>

      <div className="flex flex-wrap place-content-center justify-center m-auto items-center container h-4/5">
        {props.children}
      </div>

    </div>
  )

}