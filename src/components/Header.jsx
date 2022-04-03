import Link from 'next/link'

export default function Header(props) {
  const return_button = <Link href="/">Voltar</Link>
  return (
    <header className={props.style}>
      <h2>{props.title ? props.title : "NextMovie"}</h2>

      {props.title ? return_button : null}
    </header>
  )
}