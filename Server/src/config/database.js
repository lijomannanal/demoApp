const mariadb = require('mariadb');
const {
    DB_HOST = '127.0.0.1',
    DB_PORT = '3306',
    DB_SCHEMA = 'school-administration-system',
    DB_USER = 'root',
    DB_PW = 'password',
    DB_CONNECTION_LIMIT = '5'
  } = process.env

// create a new connection pool
const pool = mariadb.createPool({
  host: DB_HOST, 
  port: Number(DB_PORT),
  user: DB_USER, 
  database: DB_SCHEMA,
  connectionLimit: Number(DB_CONNECTION_LIMIT)
});

const getConnection = () => {
  return new Promise(function(resolve,reject){
    pool.getConnection().then(function(connection){
      resolve(connection);
    }).catch(function(error){
      reject(error);
    });
  });
}
export default getConnection;
