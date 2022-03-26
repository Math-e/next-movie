export default function Layout(props) {
  return (
    <head>
      <title>{props.title ? props.title : "NextMovie"}</title>
    </head>
  )
}