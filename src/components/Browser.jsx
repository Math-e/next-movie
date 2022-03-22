import Link from "next/link"
import styles from '../styles/Browser.module.css'

export default function Browser(props) {
  return (

    <Link href={props.destin}>

      <div className={styles.browser} style={{
        backgroundColor: props.color ?? 'rgba(200, 200, 200, 0.8)'
      }}>

        {props.text}

      </div>
    </Link>
  )
}