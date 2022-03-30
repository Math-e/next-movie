import Link from 'next/link'

export default function Header(props) {
  const return_button = <Link href="/">Voltar</Link>
  return (
    <header>
      <h2>{props.title ? props.title : "NextMovie"}</h2>

      {props.title ? return_button : null}
    </header>
  )
}