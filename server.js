const express = require('express')
const app = express()
app.use((req, res, next) => {
  if (req.headers.authorization !== process.env.AUTHKEY) res.status(401).json({ error: 'Bad credentials' })
  else next()
})
app.get('/:database/:collection', require('./mongo-get.js'))
app.use(require('body-parser').json())
app.post('/:database/:collection', require('./mongo-post.js'))
let updateRouter = require('./mongo-update.js')
app.patch('/:database/:collection', updateRouter)
app.put('/:database/:collection', updateRouter)
app.delete('/:database/:collection', require('./mongo-delete.js'))
app.listen(process.env.PORT)