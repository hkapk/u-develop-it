const mysql = require('mysql2');

//MySQL db connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'password',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;