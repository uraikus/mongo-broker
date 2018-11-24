module.exports = async (req, res) => {
  let db = await require('./mongo-client.js')(req.params.database)
  let collection = db.collection(req.params.collection)
  if (typeof req.body !== 'object') return res.status(400).json({ error: 'Poor body construction. Verify Content-Type header equals "Application/JSON"' })
  else if (Array.isArray(req.body)) {
    let docs = await collection.insertMany(req.body)
    return res.json(docs)
 } else {
    let doc = await collection.insertOne(req.body)
    return res.json(doc)
  }
}