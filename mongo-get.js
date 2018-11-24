module.exports = async (req, res) => {
  let db = await require('./mongo-client.js')(req.params.database)
  let collection = db.collection(req.params.collection)
  if (req.query._id) collection.findOne(req.query, (err, doc) => {
    if (err) return res.status(500).json(err)
    else if (doc) return res.json(doc)
    else return res.status(400).json({ error: 'Collection does not exist.' })
  })
  else collection.find(req.query).toArray((err, docs) => {
    if (err) return res.status(500).json(err)
    else if (docs) return res.json(docs)
    else return res.status(400).json({ error: 'Collection does not exist.' })
  })
}