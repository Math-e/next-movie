import Link from "next/link"
import styles from '../styles/Browser.module.css'

export default function Browser(props) {
  return (

    <Link href={props.destin}>

      <div className={[styles.browser, "cursor-pointer hover:font-semibold"].join(" ")} style={{
        backgroundColor: props.color ?? 'grey'
      }}>

        {props.text}

      </div>
    </Link>
  )
}