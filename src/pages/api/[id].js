// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "knex"

export default function customer(req, res){

  if(req.method === 'GET'){
    handler(req, res)
  } else {
    req.status(405).send()
  }
}

async function handler(req, res) {
  
  const customers = await knex('customers').select('id')

  console.log(customers)

  /*
  res.status(200).json({ 
    id: +req.query.id,
    name: 'John Doe',
    tags: ['client', 'starter'],
    child: {
      id: (+req.query.id) + 0.5,
      name: 'Mary Sue',
      tags: ['child', 'server']
    }
  })*/
}
