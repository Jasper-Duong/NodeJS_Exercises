require("dotenv").config();
const ENV = process.env;
module.exports = {
  db_name: ENV.DB_NAME,
  db_host: ENV.DB_HOST,
  db_port: ENV.DB_PORT,
  db_user: ENV.DB_USER,
  db_pass: ENV.DB_PASS,
  db_dialect: ENV.DB_DIALECT,
};
