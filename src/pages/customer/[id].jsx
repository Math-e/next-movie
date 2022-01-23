import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Customer(){
  const router = useRouter()
  return (
    <Layout title="Dynamic browsing">
      <span>Id = {router.query.id}</span>
    </Layout>
  )
}