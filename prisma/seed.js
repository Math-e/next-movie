const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const movies = await prisma.Movie.upsert({
    where: { id: "1" },
    update: {},
    create: {
      title: "Titanic",
      description: 'RMS Titanic was a British passenger liner, operated by the White Star Line, which sank in the North Atlantic Ocean on 15 April 1912 after striking an iceberg during her maiden voyage from Southampton, UK, to New York City.Of the estimated 2,224 passengers and crew aboard, more than 1,500 died, which made the sinking possibly one of the deadliest for a single ship up to that time.',
      release: "1998-01-16",
      cover_img: "titanic.png"
    },
  })

  console.log({ alice, bob })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })