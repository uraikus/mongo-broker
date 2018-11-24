module.exports = async (req, res) => {
  let db = await require('./mongo-client.js')(req.params.database)
  let collection = db.collection(req.params.collection)
  if (typeof req.body !== 'object') return res.status(400).json({ error: 'Poor body construction. Verify Content-Type header equals "Application/JSON"' })
  else if (Array.isArray(req.body)) return res.status(400).json({ error: 'Body content should be an object; not an array.' })
  else if (Object.keys(req.query).length === 0) return res.status(400).json({ error: 'At least one query string should be present when updating documents.' })
  else {
    let docs = await collection.updateMany(req.query, { $set: req.body }, { upsert: req.method === 'PUT' })
    return res.json(docs)
  } 
}