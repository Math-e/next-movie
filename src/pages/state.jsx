import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {

  const state = useState(0)
  let number = state[0]
  let alterNumber = state[1]

  function increment(){
    alterNumber(number += 1)
  }

  return (
    <Layout title="State component">
      <span id="numberId">{number}</span>
      <button onClick={increment}>Increment</button>
    </Layout>
  )
}