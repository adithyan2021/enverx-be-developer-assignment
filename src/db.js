const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
   user: 'postgres',
  database: "postgres",
  password: '1234',
  port: 5432,
});
    pool.connect()
module.exports = {
  query: (text, params) => pool.query(text, params),
};
