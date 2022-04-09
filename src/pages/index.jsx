import Browser from '../components/Browser'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>

      <Browser text="State" destin="/state" />
      <Browser text="Customer" destin="/customer/003" color="aqua" />
      <Browser text="API Integration" destin="/integration" color="yellow" />

    </Layout>
  )
}