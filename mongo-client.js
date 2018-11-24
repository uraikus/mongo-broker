var client

module.exports = dbName => new Promise((resolve, reject) => {
  let MongoClient = require('mongodb').MongoClient
  client = client || new MongoClient(process.env.mongoURI, { useNewUrlParser: true })
  client.connect(err => {
    if (err) reject(err)
    else resolve(client.db(dbName))
  })
})