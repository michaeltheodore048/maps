var path = require('path')

var settings = {
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.PORT || 8080,
  database   : {
    protocol : "mysql", // or "mysql"
    query    : {pool: true},
    host     : "sql6.freemysqlhosting.net",
    user     : "sql6162198",
    password : "lb2U81KHBA",
    database : "sql6162198",
    port     : "3306",
    multipleStatements: true,
    acquireTimeout: Number.POSITIVE_INFINITY
  }
  // database   : {
  //   protocol : "mysql", // or "mysql"
  //   query    : {pool: true},
  //   host     : "localhost",
  //   user     : "root",
  //   password : "",
  //   database : "maps"
  // }
}

module.exports = settings
