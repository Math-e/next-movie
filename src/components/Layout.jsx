import styles from '../styles/Layout.module.css'
import Header from './Header'


export default function Layout(props) {
  return (
    <div className={styles.layout}>

      <div className={styles.header}>
        <Header title={props.title}></Header>
      </div>

      <div className={styles.content}>
        {props.children}
      </div>
      
    </div>
  )

}