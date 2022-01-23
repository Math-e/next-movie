import Browser from '../components/Browser'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh'
        }}>
          <Browser text="Test" destin="/test" />
          <Browser text="State" destin="/state" />
          <Browser text="Customer" destin="/customer/003" color="aqua" />
          <Browser text="API Integration" destin="/integration" color="yellow" />
        </div>

      </Layout>
    </>
  )
}