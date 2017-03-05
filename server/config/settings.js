var path = require('path')

var settings = {
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.PORT || 8080,
  // database   : {
  //   protocol : "mysql", // or "mysql"
  //   query    : {pool: true, debug: true},
  //   host     : "36.86.63.182",
  //   // database : "anontxt_dev",
  //   user     : "u461629424_user",
  //   password : "asdasd",
  //   database : "u461629424_etobe",
  //   // port: '8889'
  // }
  database   : {
    protocol : "mysql", // or "mysql"
    query    : {pool: true},
    host     : "localhost",
    user     : "root",
    password : "",
    database : "maps"
  }
}

module.exports = settings
