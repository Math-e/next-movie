module.exports = {
  client: 'sqlite3',
  connection: {
    filename: "src/database/db.sqlite"
  },
  migrations: {
    directory: "src/database/migrations"
  },
  seeds: {
    directory: "src/database/seeds"
  },
  useNullAsDefault: true
}
// npx knex migrate:latest
// npx knex seed:run