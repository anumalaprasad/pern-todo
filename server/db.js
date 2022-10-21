const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Pokemon9986",
  host: "localhost",
  port: 5432,
  database: "prm_airdrop"
});

module.exports = pool;
