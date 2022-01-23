import Layout from "../components/Layout"
import { useState } from "react"

export default function Integration() {

  const [id, setId] = useState(1)
  const [customer, setCustomer] = useState({})

  async function getCustomer() {
     const res = await fetch(`http://localhost:3000/api/${id}`)
     const data = await res.json()
     setCustomer(data)
  }

  return (
    <Layout title="Find customer">
      <div>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={getCustomer}>Find customer</button>
      </div>
      <ul>
        <li>Code: {customer.id}</li>
        <li>Name: {customer.name}</li>
        <li>Tags: {customer.tags}</li>
      </ul>
    </Layout>
  )
}